import { FirestoreService } from "src/app/modules/core/services/firestore.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../core/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private $authService: AuthService,
    private $firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {}

  loginWithGoogle() {
    console.log("click");
    this.$authService.loginWithGoogle().then(async (res) => {
      // await this.$firestoreService
      //   .findOrCreateUser(res.user)
      //   .then(() => this.router.navigate(["/page/"]));

      this.router.navigate(["/page/"]);
    });
  }
}
