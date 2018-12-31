import { Injectable } from "@angular/core";
import { Event } from "../interfaces/event";
import { FosdemLibModule } from "@cs/fosdem-lib";

@Injectable({
  providedIn: FosdemLibModule
})
export class LocalStorageService {
  constructor() {}

  addEvent(event: Event) {
    localStorage.setItem(`FOSDEM_EVENT_${event["-id"]}`, JSON.stringify(event));
  }
}
