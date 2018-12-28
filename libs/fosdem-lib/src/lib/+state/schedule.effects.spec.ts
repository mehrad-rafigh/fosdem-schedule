import { TestBed } from "@angular/core/testing";

import { Observable } from "rxjs";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { provideMockActions } from "@ngrx/effects/testing";

import { NxModule } from "@nrwl/nx";
import { DataPersistence } from "@nrwl/nx";
import { hot } from "@nrwl/nx/testing";

import { ScheduleEffects } from "./schedule.effects";
import { LoadSchedule } from "./schedule.actions";

describe("ScheduleEffects", () => {
  let actions: Observable<any>;
  let effects: ScheduleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [ScheduleEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(ScheduleEffects);
  });

  describe("loadSchedule$", () => {
    it("should work", () => {
      actions = hot("-a-|", { a: new LoadSchedule() });
      //expect(effects.loadSchedule$).toBetoBeObservable(hot("-a-|", { a: new ScheduleLoaded({} as Schedule) }));
      expect(effects.loadSchedule$).toBeTruthy();
    });
  });
});
