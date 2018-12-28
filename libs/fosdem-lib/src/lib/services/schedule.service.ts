import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Schedule } from "../interfaces/schedule";
import { Observable } from "rxjs";

@Injectable()
export class ScheduleService {
  constructor(private http: HttpClient) {}

  getSchedule(): Observable<Schedule> {
    return this.http.get<Schedule>("/assets/schedule/fosdem18.json");
  }
}
