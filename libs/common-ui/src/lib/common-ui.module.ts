import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatButtonModule, MatCardModule, MatToolbarModule } from "@angular/material";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatButtonModule],
  declarations: [NavbarComponent, CardComponent],
  exports: [NavbarComponent, CardComponent]
})
export class CommonUiModule {}
