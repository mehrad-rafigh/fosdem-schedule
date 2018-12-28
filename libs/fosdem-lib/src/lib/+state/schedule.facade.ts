import { Injectable } from "@angular/core";

import { select, Store } from "@ngrx/store";

import { SchedulePartialState } from "./schedule.reducer";
import { scheduleQuery } from "./schedule.selectors";
import { LoadSchedule } from "./schedule.actions";

@Injectable()
export class ScheduleFacade {
  loaded$ = this.store.pipe(select(scheduleQuery.getLoaded));
  allSchedule$ = this.store.pipe(select(scheduleQuery.getAllSchedule));

  constructor(private store: Store<SchedulePartialState>) {}

  loadFosdemSchedule() {
    this.store.dispatch(new LoadSchedule());
  }

  /*  loadRooms() {
    this.store.dispatch(new LoadRooms());
  }

  loadDays() {
    this.store.dispatch(new LoadDays());
  }

  loadTalks() {
    this.store.dispatch(new LoadTalks());
  }*/
}
