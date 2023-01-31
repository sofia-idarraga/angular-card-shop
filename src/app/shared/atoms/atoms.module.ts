import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarTitleComponent } from "./sidebar-title/sidebar-title.component";
import { SidebarItemComponent } from "./sidebar-item/sidebar-item.component";
import { CardTitleComponent } from "./card-title/card-title.component";
import { CardTextComponent } from "./card-text/card-text.component";
import { CardImageComponent } from "./card-image/card-image.component";
import { CardButtonComponent } from "./card-button/card-button.component";

@NgModule({
  declarations: [
    SidebarTitleComponent,
    SidebarItemComponent,
    CardTitleComponent,
    CardTextComponent,
    CardImageComponent,
    CardButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SidebarTitleComponent,
    SidebarItemComponent,
    CardTitleComponent,
    CardTextComponent,
    CardImageComponent,
    CardButtonComponent,
  ],
})
export class AtomsModule {}
