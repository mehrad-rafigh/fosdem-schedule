import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NxModule } from "@nrwl/nx";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "fosdem" }),
    NxModule.forRoot(),
    RouterModule.forRoot([{ path: "", loadChildren: "@cs/fosdem-lib#FosdemLibModule" }], {
      initialNavigation: "enabled"
    }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register("ngsw-worker.js", { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
