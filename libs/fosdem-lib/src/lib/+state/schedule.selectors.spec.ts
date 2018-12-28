import { scheduleQuery } from "./schedule.selectors";
import { Schedule } from "../interfaces/schedule";

describe("Schedule Selectors", () => {
  const ERROR_MSG = "No Error Available";

  let storeState;

  beforeEach(() => {
    const createSchedule = (): Schedule => ({} as Schedule);
    storeState = {
      schedule: {
        schedule: createSchedule(),
        selectedId: "PRODUCT-BBB",
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe("Schedule Selectors", () => {
    it("getAllSchedule() should return the list of Schedule", () => {
      const results = scheduleQuery.getAllSchedule(storeState);

      expect(results).toBeTruthy();
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = scheduleQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = scheduleQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
