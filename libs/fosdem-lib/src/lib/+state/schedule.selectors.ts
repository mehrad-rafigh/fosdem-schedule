import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SCHEDULE_FEATURE_KEY, ScheduleState } from "./schedule.reducer";

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
  (state: ScheduleState, isLoaded) => {
    return isLoaded ? state.schedule : {};
  }
);

export const scheduleQuery = {
  getLoaded,
  getError,
  getAllSchedule
};
