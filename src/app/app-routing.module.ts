import { NgModule } from "@angular/core";
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from "@angular/fire/auth-guard";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "page",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
    ...canActivate(() => redirectUnauthorizedTo(["/auth/login"])),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/auth/auth.module").then((m) => m.AuthModule),
    ...canActivate(() => redirectLoggedInTo(["/page"])),
  },
  {
    path: "**",
    redirectTo: "auth/login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
