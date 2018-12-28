import { Conference } from "./conference";
import { Day } from "./day";

export interface Schedule {
  conference: Conference;
  day: Array<Day>;
}
