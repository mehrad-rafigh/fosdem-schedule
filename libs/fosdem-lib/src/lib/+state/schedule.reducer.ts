import { ScheduleAction, ScheduleActionTypes } from "@cs/fosdem-lib";
import { Schedule } from "../interfaces/schedule";
import { Event } from "../interfaces/event";

export const SCHEDULE_FEATURE_KEY = "schedule";

export interface ScheduleState {
  schedule: Schedule; // schedule of fosdem
  loaded: boolean; // has the Schedule list been loaded
  error?: any; // last none error (if any)
  pinned: Event[];
}

export interface SchedulePartialState {
  readonly [SCHEDULE_FEATURE_KEY]: ScheduleState;
}

export const initialState: ScheduleState = {
  schedule: {} as Schedule,
  loaded: false,
  pinned: []
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
        loaded: false,
        error: action.payload
      };
      break;
    }
    case ScheduleActionTypes.AddEventToVisit: {
      state = {
        ...state,
        pinned: [...state.pinned, action.payload]
      };
      break;
    }
    case ScheduleActionTypes.AddEventToVisitError: {
      state = {
        ...state,
        error: action.payload
      };
      break;
    }
    default:
      return state;
  }

  return state;
}
