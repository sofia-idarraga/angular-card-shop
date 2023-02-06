import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AtomsModule } from "../atoms/atoms.module";
import { MoleculesModule } from "../molecules/molecules.module";
import { MyCardComponent } from "./my-card/my-card.component";
import { RechargeFormComponent } from "./recharge-form/recharge-form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CardComponent,
    SidebarComponent,
    MyCardComponent,
    RechargeFormComponent,
  ],
  imports: [CommonModule, AtomsModule, MoleculesModule, FormsModule],
  exports: [
    CardComponent,
    SidebarComponent,
    MyCardComponent,
    RechargeFormComponent,
  ],
})
export class OrganismsModule {}
