import { TestBed } from "@angular/core/testing";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { NxModule } from "@nrwl/nx";
import { DataPersistence } from "@nrwl/nx";

import { ScheduleEffects } from "@cs/fosdem-lib";
import { ScheduleService } from "../services/schedule.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ScheduleEffects", () => {
  let effects: ScheduleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), HttpClientTestingModule],
      providers: [ScheduleService, ScheduleEffects, DataPersistence]
    });

    effects = TestBed.get(ScheduleEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
