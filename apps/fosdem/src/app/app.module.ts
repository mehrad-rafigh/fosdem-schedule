import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NxModule } from "@nrwl/nx";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { rootReducer } from "./+state/root.reducer";
import { storeFreeze } from "ngrx-store-freeze";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "fosdem" }),
    NxModule.forRoot(),
    RouterModule.forRoot([{ path: "", loadChildren: "@cs/fosdem-lib#FosdemLibModule" }], {
      initialNavigation: "enabled"
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register("ngsw-worker.js", { enabled: environment.production }),
    StoreModule.forRoot(
      { root: rootReducer },
      {
        initialState: {},
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
