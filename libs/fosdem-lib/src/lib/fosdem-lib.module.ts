import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CommonUiModule } from "@cs/common-ui";
import { HomeComponent } from "./components/home/home.component";
import { ScheduleService } from "./services/schedule.service";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { SCHEDULE_FEATURE_KEY, initialState as scheduleInitialState, scheduleReducer } from "./+state/schedule.reducer";
import { ScheduleEffects } from "@cs/fosdem-lib";
import { ScheduleFacade } from "@cs/fosdem-lib";
import { LocalStorageService } from "./services/local-storage.service";
import { EventComponent } from "./components/event/event.component";
import { RoomComponent } from "./components/room/room.component";

@NgModule({
  imports: [
    CommonUiModule,
    CommonModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", component: HomeComponent },
      { path: "events", component: EventComponent },
      { path: "rooms", component: RoomComponent },
      { path: "**", redirectTo: "" }
    ]),
    StoreModule.forFeature(SCHEDULE_FEATURE_KEY, scheduleReducer, { initialState: scheduleInitialState }),
    EffectsModule.forFeature([ScheduleEffects])
  ],
  declarations: [HomeComponent, EventComponent, RoomComponent],
  providers: [ScheduleService, ScheduleFacade, LocalStorageService]
})
export class FosdemLibModule {}
