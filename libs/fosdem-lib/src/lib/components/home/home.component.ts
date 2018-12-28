import { Component, OnDestroy, OnInit } from "@angular/core";
import { ScheduleFacade } from "@cs/fosdem-lib";

@Component({
  selector: "cs-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  title = "HOMEPAGE WORKS AND NEEDS UPDATE";
  constructor(private scheduleFacade: ScheduleFacade) {}

  ngOnInit(): void {
    this.scheduleFacade.loadFosdemSchedule();
    this.scheduleFacade.allSchedule$.subscribe(_ => {});
  }

  ngOnDestroy(): void {}
}
