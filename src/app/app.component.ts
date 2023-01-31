import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="d-flex">
      <!-- Sidebar-->
      <app-sidebar
        [items]="items"
        [routerLinks]="links"
        [title]="title"
      ></app-sidebar>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  items = ["Cards Store", "My Cards", "Recharge", "Send Cards"];
  links = ["/pages/store", "/pages/cards", "/pages/recharge", "/pages/send"];
  title = "Cards Shop";
}
