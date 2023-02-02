import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreComponent } from "./store/store.component";
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { MyCardsComponent } from "./my-cards/my-cards.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "store",
        component: StoreComponent,
      },
      {
        path: "mycards",
        component: MyCardsComponent,
      },
      {
        path: "**",
        redirectTo: "store",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
