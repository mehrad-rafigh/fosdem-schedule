import { SafeHtml } from "@angular/platform-browser";
import { Link } from "./link";
import { Person } from "./person";

export interface Event {
  "-id": string;
  start: string;
  duration: string;
  room: string;
  slug: string;
  title: string;
  track: string;
  type: string;
  abstract: SafeHtml;
  description: SafeHtml;
  persons: Person | Array<Person>;
  links: Link | Array<Link>;
}
