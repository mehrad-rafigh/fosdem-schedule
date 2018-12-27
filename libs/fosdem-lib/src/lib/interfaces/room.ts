import { Event } from "./event";

export interface Room {
  "-name": string;
  event?: Array<Event>;
}
