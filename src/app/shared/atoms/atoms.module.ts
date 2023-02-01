import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarTitleComponent } from "./sidebar-title/sidebar-title.component";
import { SidebarItemComponent } from "./sidebar-item/sidebar-item.component";
import { CardTitleComponent } from "./card-title/card-title.component";
import { CardTextComponent } from "./card-text/card-text.component";
import { CardImageComponent } from "./card-image/card-image.component";
import { CardButtonComponent } from "./card-button/card-button.component";
import { CardSmallTextComponent } from "./card-small-text/card-small-text.component";
import { AuthButtonComponent } from "./auth-button/auth-button.component";
import { SidebarBalanceTextComponent } from "./sidebar-balance-text/sidebar-balance-text.component";

@NgModule({
  declarations: [
    SidebarTitleComponent,
    SidebarItemComponent,
    CardTitleComponent,
    CardTextComponent,
    CardImageComponent,
    CardButtonComponent,
    CardSmallTextComponent,
    AuthButtonComponent,
    SidebarBalanceTextComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SidebarTitleComponent,
    SidebarItemComponent,
    CardTitleComponent,
    CardTextComponent,
    CardImageComponent,
    CardButtonComponent,
    CardSmallTextComponent,
    AuthButtonComponent,
    SidebarBalanceTextComponent,
  ],
})
export class AtomsModule {}
