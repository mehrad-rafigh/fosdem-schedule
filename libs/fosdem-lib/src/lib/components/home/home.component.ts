import { Component, OnDestroy, OnInit } from "@angular/core";
import { ScheduleFacade } from "@cs/fosdem-lib";

@Component({
  selector: "cs-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  title = "HOMEPAGE WORKS AND NEEDS UPDATE";
  constructor(private scheduleFacade: ScheduleFacade) {}

  ngOnInit(): void {
    this.scheduleFacade.loadFosdemSchedule();
    this.scheduleFacade.allSchedule$.subscribe(console.log);
    this.scheduleFacade.rooms$.subscribe(console.log);
    this.scheduleFacade.events$.subscribe(console.log);
  }
}
