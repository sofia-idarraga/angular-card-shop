import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardBodyComponent } from "./card-body/card-body.component";
import { AtomsModule } from "../atoms/atoms.module";

@NgModule({
  declarations: [CardBodyComponent],
  imports: [CommonModule, AtomsModule],
  exports: [CardBodyComponent],
})
export class MoleculesModule {}
