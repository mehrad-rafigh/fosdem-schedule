import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NxModule } from "@nrwl/nx";
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonUiModule } from "@cs/common-ui";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "fosdem-2019" }),
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: "enabled" }),
    ServiceWorkerModule.register("ngsw-worker.js", { enabled: environment.production }),
    BrowserAnimationsModule,
    CommonUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
