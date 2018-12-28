import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";

import { SchedulePartialState } from "./schedule.reducer";
import { LoadSchedule, ScheduleLoaded, ScheduleLoadError, ScheduleActionTypes } from "./schedule.actions";
import { ScheduleService } from "../services/schedule.service";

@Injectable()
export class ScheduleEffects {
  @Effect() loadSchedule$ = this.dataPersistence.fetch(ScheduleActionTypes.LoadSchedule, {
    run: (action: LoadSchedule, state: SchedulePartialState) => {
      this.scheduleService.getSchedule().subscribe(payload => {
        debugger;
        return new ScheduleLoaded(payload);
      });
    },

    onError: (action: LoadSchedule, error) => {
      console.error("Error", error);
      return new ScheduleLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SchedulePartialState>,
    private scheduleService: ScheduleService
  ) {}
}
