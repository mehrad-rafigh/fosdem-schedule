import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CommonUiModule } from "@cs/common-ui";

@NgModule({
  imports: [
    CommonModule,
    CommonUiModule,
    RouterModule.forChild([{ path: "", pathMatch: "full", component: HomeComponent }])
  ],
  declarations: [HomeComponent]
})
export class FosdemLibModule {}
