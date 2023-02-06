import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreComponent } from "./store/store.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { OrganismsModule } from "../shared/organisms/organisms.module";
import { MyCardsComponent } from "./my-cards/my-cards.component";
import { MoleculesModule } from "../shared/molecules/molecules.module";
import { RechargeComponent } from './recharge/recharge.component';

@NgModule({
  declarations: [StoreComponent, MyCardsComponent, RechargeComponent],
  imports: [CommonModule, PagesRoutingModule, MoleculesModule, OrganismsModule],
  exports: [StoreComponent],
})
export class PagesModule {}
