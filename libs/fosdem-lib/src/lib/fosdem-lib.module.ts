import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CommonUiModule } from "@cs/common-ui";
import { HomeComponent } from "./components/home/home.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonUiModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{ path: "", pathMatch: "full", component: HomeComponent }])
  ],
  declarations: [HomeComponent]
})
export class FosdemLibModule {}
