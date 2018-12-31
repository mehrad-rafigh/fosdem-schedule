import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ScheduleFacade, ScheduleState } from "@cs/fosdem-lib";
import { ScheduleService } from "../../services/schedule.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MockStore } from "@ngrx/store/testing";
import { Store } from "@ngrx/store";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const emptyState = { schedule: {}, loaded: false };
    const mockStore = new MockStore<ScheduleState>(emptyState);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [ScheduleFacade, ScheduleService, { provide: Store, useValue: mockStore }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
