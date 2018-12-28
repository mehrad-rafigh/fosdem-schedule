import { Action } from "@ngrx/store";
import { Schedule } from "../interfaces/schedule";

export enum ScheduleActionTypes {
  LoadSchedule = "[Schedule] Load Schedule",
  ScheduleLoaded = "[Schedule] Schedule Loaded",
  ScheduleLoadError = "[Schedule] Schedule Load Error"
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

export type ScheduleAction = LoadSchedule | ScheduleLoaded | ScheduleLoadError;

export const fromScheduleActions = {
  LoadSchedule,
  ScheduleLoaded,
  ScheduleLoadError
};
