import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreComponent } from "./store/store.component";
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "store",
        component: StoreComponent,
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
