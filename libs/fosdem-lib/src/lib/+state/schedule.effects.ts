import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";

import { SCHEDULE_FEATURE_KEY, SchedulePartialState } from "./schedule.reducer";
import { LoadSchedule, ScheduleActionTypes, ScheduleLoaded, ScheduleLoadError } from "./schedule.actions";
import { ScheduleService } from "../services/schedule.service";
import { map } from "rxjs/operators";

@Injectable()
export class ScheduleEffects {
  @Effect() loadSchedule$ = this.dataPersistence.fetch(ScheduleActionTypes.LoadSchedule, {
    run: (action: LoadSchedule, state: SchedulePartialState) => {
      return this.scheduleService.getSchedule().pipe(map(payload => new ScheduleLoaded(payload)));
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
