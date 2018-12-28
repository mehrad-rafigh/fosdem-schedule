import { ScheduleAction, ScheduleActionTypes } from "./schedule.actions";
import { Schedule } from "../interfaces/schedule";

export const SCHEDULE_FEATURE_KEY = "schedule";

export interface ScheduleState {
  schedule: Schedule; // schedule of fosdem
  loaded: boolean; // has the Schedule list been loaded
  error?: any; // last none error (if any)
}

export interface SchedulePartialState {
  readonly [SCHEDULE_FEATURE_KEY]: ScheduleState;
}

export const initialState: ScheduleState = {
  schedule: {} as Schedule,
  loaded: false
};

export function scheduleReducer(state: ScheduleState = initialState, action: ScheduleAction): ScheduleState {
  switch (action.type) {
    case ScheduleActionTypes.ScheduleLoaded: {
      state = {
        ...state,
        schedule: action.payload,
        loaded: true
      };
      break;
    }
    case ScheduleActionTypes.ScheduleLoadError: {
      state = {
        ...state,
        loaded: false
      };
      break;
    }
  }

  return state;
}
