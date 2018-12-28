import { async, TestBed } from "@angular/core/testing";
import { FosdemLibModule } from "./fosdem-lib.module";

describe("FosdemLibModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FosdemLibModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(FosdemLibModule).toBeDefined();
  });
});
