import { FormsModule } from "@angular/forms";
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
import { PageTitleComponent } from "./page-title/page-title.component";
import { RechargeInputComponent } from "./recharge-input/recharge-input.component";
import { RechargeButtonComponent } from "./recharge-button/recharge-button.component";
import { RechargeSpanComponent } from "./recharge-span/recharge-span.component";

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
    PageTitleComponent,
    RechargeInputComponent,
    RechargeButtonComponent,
    RechargeSpanComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
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
    PageTitleComponent,
    RechargeInputComponent,
    RechargeButtonComponent,
    RechargeSpanComponent,
  ],
})
export class AtomsModule {}
