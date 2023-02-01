import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreComponent } from "./store/store.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { OrganismsModule } from "../shared/organisms/organisms.module";

@NgModule({
  declarations: [StoreComponent],
  imports: [CommonModule, PagesRoutingModule, OrganismsModule],
  exports: [StoreComponent],
})
export class PagesModule {}
