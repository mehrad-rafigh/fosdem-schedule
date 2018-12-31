import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Event } from "../interfaces/event";
import { SCHEDULE_FEATURE_KEY, ScheduleState } from "@cs/fosdem-lib";

// Lookup the 'Schedule' feature state managed by NgRx
const getScheduleState = createFeatureSelector<ScheduleState>(SCHEDULE_FEATURE_KEY);

const getLoaded = createSelector(
  getScheduleState,
  (state: ScheduleState) => state.loaded
);
const getError = createSelector(
  getScheduleState,
  (state: ScheduleState) => state.error
);

const getAllSchedule = createSelector(
  getScheduleState,
  getLoaded,
  (state: ScheduleState, isLoaded) => (isLoaded ? state.schedule : {})
);

const getRooms = createSelector(
  getScheduleState,
  getLoaded,
  (state: ScheduleState, isLoaded) => {
    if (!isLoaded) return new Set();
    const rooms = new Set();
    state.schedule.day.map(day => day.room.map(room => rooms.add(room["-name"])));
    return rooms;
  }
);

const getEvents = createSelector(
  getScheduleState,
  getLoaded,
  (state: ScheduleState, isLoaded: boolean) => {
    if (!isLoaded) return [];
    const events: Event[] = [];
    state.schedule.day.map(day => {
      day.room.map(room => {
        if (room.event && Array.isArray(room.event)) {
          room.event.map(e => {
            events.push(e);
          });
        } else if (room.event && typeof room.event === "object") {
          events.push(room.event[0]);
        }
      });
    });

    return events;
  }
);

export const scheduleQuery = {
  getLoaded,
  getError,
  getAllSchedule,
  getRooms,
  getEvents
};
