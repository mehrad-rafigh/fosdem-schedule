import { ScheduleLoaded } from "./schedule.actions";
import { ScheduleState, initialState, scheduleReducer } from "./schedule.reducer";
import { Schedule } from "../interfaces/schedule";

describe("Schedule Reducer", () => {
  let createSchedule;

  beforeEach(() => {
    createSchedule = (): Schedule => ({} as Schedule);
  });

  describe("valid Schedule actions ", () => {
    it("should return set the list of known Schedule", () => {
      const schedule = {} as Schedule;
      const action = new ScheduleLoaded(schedule);
      const result: ScheduleState = scheduleReducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.schedule).toBeTruthy();
    });
  });

  describe("unknown action", () => {
    it("should return the initial state", () => {
      const action = {} as any;
      const result = scheduleReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
