import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardBodyComponent } from "./card-body/card-body.component";
import { AtomsModule } from "../atoms/atoms.module";
import { MyCardBodyComponent } from "./my-card-body/my-card-body.component";

@NgModule({
  declarations: [CardBodyComponent, MyCardBodyComponent],
  imports: [CommonModule, AtomsModule],
  exports: [CardBodyComponent, MyCardBodyComponent],
})
export class MoleculesModule {}
