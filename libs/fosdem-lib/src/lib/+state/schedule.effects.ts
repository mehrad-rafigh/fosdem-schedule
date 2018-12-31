import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";

import { SchedulePartialState, UndoAddEventToVisit } from "@cs/fosdem-lib";
import {
  LoadSchedule,
  ScheduleLoaded,
  ScheduleLoadError,
  ScheduleActionTypes,
  AddEventToVisit,
  AddEventToVisitError,
  AddEventToVisitSuccess
} from "@cs/fosdem-lib";
import { ScheduleService } from "../services/schedule.service";
import { map } from "rxjs/operators";
import { LocalStorageService } from "../services/local-storage.service";

@Injectable()
export class ScheduleEffects {
  @Effect() loadSchedule$ = this.dataPersistence.fetch(ScheduleActionTypes.LoadSchedule, {
    run: (action: LoadSchedule, state: SchedulePartialState) => {
      return this.scheduleService.getSchedule().pipe(map(payload => new ScheduleLoaded(payload)));
    },

    onError: (action: LoadSchedule, error: unknown) => {
      console.error("Error", error);
      return new ScheduleLoadError(error);
    }
  });

  @Effect() addEventToVisit$ = this.dataPersistence.pessimisticUpdate(ScheduleActionTypes.AddEventToVisit, {
    run: (action: AddEventToVisit, state: SchedulePartialState) => {
      this.localStorageService.addEvent(action.payload);
      return new AddEventToVisitSuccess();
    },

    onError: (action: any, error: unknown) => {
      console.error("Error adding event to local storage", error);
      return new AddEventToVisitError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SchedulePartialState>,
    private scheduleService: ScheduleService,
    private localStorageService: LocalStorageService
  ) {}
}
