import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material";

const declarationToExport = [NavbarComponent];

@NgModule({
  imports: [CommonModule, MatToolbarModule],
  declarations: [...declarationToExport],
  exports: [...declarationToExport]
})
export class CommonUiModule {}
