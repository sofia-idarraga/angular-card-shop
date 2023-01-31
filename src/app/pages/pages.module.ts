import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreComponent } from "./store/store.component";
import { PagesRoutingModule } from "./pages-routing.module";

@NgModule({
  declarations: [StoreComponent],
  imports: [CommonModule, PagesRoutingModule],
  exports: [StoreComponent],
})
export class PagesModule {}
