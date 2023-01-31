import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardComponent } from "./shared/organisms/card/card.component";

const routes: Routes = [
  {
    path: "page",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "**",
    redirectTo: "page",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
