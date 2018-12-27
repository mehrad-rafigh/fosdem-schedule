import { Room } from "./room";

export interface Day {
  "-index": string;
  "-date": string;
  room: Array<Room>;
}
