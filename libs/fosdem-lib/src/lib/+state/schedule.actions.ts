import { Action } from "@ngrx/store";
import { Schedule } from "../interfaces/schedule";
import { Event } from "../interfaces/event";

export enum ScheduleActionTypes {
  LoadSchedule = "[Schedule] Load Schedule",
  ScheduleLoaded = "[Schedule] Schedule Loaded",
  ScheduleLoadError = "[Schedule] Schedule Load Error",
  AddEventToVisit = "[Schedule] Add Event To Visit",
  AddEventToVisitSuccess = "[Schedule] Add Event To Visit Success",
  AddEventToVisitError = "[Schedule] Add Event To Visit Error",
  UndoAddEventToVisit = "[Schedule] Undo Add Event to Visit"
}

export class LoadSchedule implements Action {
  readonly type = ScheduleActionTypes.LoadSchedule;
}

export class ScheduleLoadError implements Action {
  readonly type = ScheduleActionTypes.ScheduleLoadError;
  constructor(public payload: any) {}
}

export class ScheduleLoaded implements Action {
  readonly type = ScheduleActionTypes.ScheduleLoaded;
  constructor(public payload: Schedule) {}
}

export class AddEventToVisit implements Action {
  readonly type = ScheduleActionTypes.AddEventToVisit;
  constructor(public payload: Event) {}
}

export class AddEventToVisitSuccess implements Action {
  readonly type = ScheduleActionTypes.AddEventToVisitSuccess;
}

export class AddEventToVisitError implements Action {
  readonly type = ScheduleActionTypes.AddEventToVisitError;
  constructor(public payload: unknown) {}
}

export class UndoAddEventToVisit implements Action {
  readonly type = ScheduleActionTypes.UndoAddEventToVisit;
  constructor(public payload: Event) {}
}

export type ScheduleAction =
  | LoadSchedule
  | ScheduleLoaded
  | ScheduleLoadError
  | AddEventToVisit
  | AddEventToVisitSuccess
  | AddEventToVisitError;

export const fromScheduleActions = {
  LoadSchedule,
  ScheduleLoaded,
  ScheduleLoadError,
  AddEventToVisit,
  AddEventToVisitSuccess,
  AddEventToVisitError
};
