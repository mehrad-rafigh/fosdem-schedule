import { Injectable } from "@angular/core";

import { select, Store } from "@ngrx/store";

import { AddEventToVisit, SchedulePartialState } from "@cs/fosdem-lib";
import { scheduleQuery } from "@cs/fosdem-lib";
import { LoadSchedule } from "@cs/fosdem-lib";
import { Event } from "../interfaces/event";

@Injectable()
export class ScheduleFacade {
  loaded$ = this.store.pipe(select(scheduleQuery.getLoaded));
  allSchedule$ = this.store.pipe(select(scheduleQuery.getAllSchedule));
  rooms$ = this.store.pipe(select(scheduleQuery.getRooms));
  events$ = this.store.pipe(select(scheduleQuery.getEvents));

  constructor(private store: Store<SchedulePartialState>) {}

  loadFosdemSchedule() {
    this.store.dispatch(new LoadSchedule());
  }

  addEventToVisit(event: Event) {
    this.store.dispatch(new AddEventToVisit(event));
  }
}
