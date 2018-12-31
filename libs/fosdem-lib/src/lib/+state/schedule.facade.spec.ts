import { NgModule } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { readFirst } from "@nrwl/nx/testing";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule, Store } from "@ngrx/store";

import { NxModule } from "@nrwl/nx";

import { ScheduleEffects } from "@cs/fosdem-lib";
import { ScheduleFacade } from "@cs/fosdem-lib";

import { ScheduleLoaded } from "./schedule.actions";
import { ScheduleState, initialState, scheduleReducer } from "@cs/fosdem-lib";
import { Schedule } from "../interfaces/schedule";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ScheduleService } from "../services/schedule.service";

interface TestSchema {
  schedule: ScheduleState;
}

describe("ScheduleFacade", () => {
  let facade: ScheduleFacade;
  let store: Store<TestSchema>;
  let createSchedule;

  beforeEach(() => {
    createSchedule = () => ({});
  });

  describe("used in NgModule", () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature("schedule", scheduleReducer, { initialState }),
          EffectsModule.forFeature([ScheduleEffects]),
          HttpClientTestingModule
        ],
        providers: [ScheduleFacade, ScheduleService]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ScheduleFacade);
    });

    /**
     * The initially generated facade::loadFosdemSchedule() returns empty array
     */
    it("loadFosdemSchedule() should return fosdem schedule with loaded == true", async done => {
      try {
        let schedule = await readFirst(facade.allSchedule$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(schedule).toBeTruthy();
        expect(isLoaded).toBe(false);

        facade.loadFosdemSchedule();

        schedule = await readFirst(facade.allSchedule$);
        isLoaded = await readFirst(facade.loaded$);

        expect(schedule).toBeTruthy();
        expect(isLoaded).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `ScheduleLoaded` to manually submit list for state management
     */
    it("allSchedule$ should return the loaded list; and loaded flag == true", async done => {
      try {
        let schedule = await readFirst(facade.allSchedule$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(schedule).toBeTruthy();
        expect(isLoaded).toBe(false);

        store.dispatch(new ScheduleLoaded({} as Schedule));

        schedule = await readFirst(facade.allSchedule$);
        isLoaded = await readFirst(facade.loaded$);

        expect(schedule).toBeTruthy();
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
