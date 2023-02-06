import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardBodyComponent } from "./card-body/card-body.component";
import { AtomsModule } from "../atoms/atoms.module";
import { MyCardBodyComponent } from "./my-card-body/my-card-body.component";
import { PageTitleComponent } from "./page-title/page-title.component";
import { RechargeInputComponent } from "./recharge-input/recharge-input.component";

@NgModule({
  declarations: [
    CardBodyComponent,
    MyCardBodyComponent,
    PageTitleComponent,
    RechargeInputComponent,
  ],
  imports: [CommonModule, AtomsModule],
  exports: [
    CardBodyComponent,
    MyCardBodyComponent,
    PageTitleComponent,
    RechargeInputComponent,
  ],
})
export class MoleculesModule {}
