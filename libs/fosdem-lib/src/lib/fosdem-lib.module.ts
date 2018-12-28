import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CommonUiModule } from "@cs/common-ui";
import { HomeComponent } from "./components/home/home.component";
import { ScheduleService } from "./services/schedule.service";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { SCHEDULE_FEATURE_KEY, initialState as scheduleInitialState, scheduleReducer } from "./+state/schedule.reducer";
import { ScheduleEffects } from "./+state/schedule.effects";
import { ScheduleFacade } from "./+state/schedule.facade";

@NgModule({
  imports: [
    CommonUiModule,
    CommonModule,
    RouterModule.forChild([{ path: "", pathMatch: "full", component: HomeComponent }]),
    StoreModule.forFeature(SCHEDULE_FEATURE_KEY, scheduleReducer, { initialState: scheduleInitialState }),
    EffectsModule.forFeature([ScheduleEffects])
  ],
  declarations: [HomeComponent],
  providers: [ScheduleService, ScheduleFacade]
})
export class FosdemLibModule {}
