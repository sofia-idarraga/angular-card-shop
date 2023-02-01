import { FirestoreService } from "./../../../modules/core/services/firestore.service";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/modules/core/services/auth.service";
import { User as UserModel } from "src/app/modules/core/domain/entities/user.model";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styles: [],
})
export class SidebarComponent implements OnInit {
  @Input() items: string[] = [];
  @Input() routerLinks: string[] = [];
  @Input() title!: string;
  constructor(
    private $authService: AuthService,
    private $firestoreService: FirestoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.$firestoreService.getAppUser().subscribe((doc) => {
    //   this.currentAppUser = doc[0];
    // });
  }

  currentAppUser?: UserModel;

  logout() {
    this.$authService.logOut().then((res) => this.router.navigate(["/auth/"]));
  }
}
