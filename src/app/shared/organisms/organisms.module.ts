import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AtomsModule } from "../atoms/atoms.module";
import { MoleculesModule } from "../molecules/molecules.module";
import { MyCardComponent } from "./my-card/my-card.component";

@NgModule({
  declarations: [CardComponent, SidebarComponent, MyCardComponent],
  imports: [CommonModule, AtomsModule, MoleculesModule],
  exports: [CardComponent, SidebarComponent, MyCardComponent],
})
export class OrganismsModule {}
