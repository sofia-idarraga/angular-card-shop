import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AtomsModule } from "../atoms/atoms.module";
import { MoleculesModule } from "../molecules/molecules.module";

@NgModule({
  declarations: [CardComponent, SidebarComponent],
  imports: [CommonModule, AtomsModule, MoleculesModule],
  exports: [CardComponent, SidebarComponent],
})
export class OrganismsModule {}
