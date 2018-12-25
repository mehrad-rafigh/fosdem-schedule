import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CommonUiModule } from "@cs/common-ui";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  imports: [
    CommonUiModule,
    CommonModule,

    RouterModule.forChild([{ path: "", pathMatch: "full", component: HomeComponent }])
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class FosdemLibModule {}
