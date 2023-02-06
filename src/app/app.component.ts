import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="d-flex" *ngIf="router.url !== '/auth/login'">
      <!-- Sidebar-->
      <app-sidebar
        [items]="items"
        [routerLinks]="links"
        [title]="title"
      ></app-sidebar>
      <router-outlet></router-outlet>
    </div>
    <router-outlet *ngIf="router.url == '/auth/login'"></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  items = ["Cards Store", "My Cards", "Recharge"];
  links = ["/page/store", "/page/mycards", "/page/recharge"];
  title = "Cards Shop";

  constructor(public router: Router) {}
}
