import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { AtomsModule } from "src/app/shared/atoms/atoms.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRoutingModule, AtomsModule],
  exports: [LoginComponent],
})
export class AuthModule {}
