import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "atom-sidebar-item",
  template: `
    <a [routerLink]="routerLink" class="list-group-item list-group-item-action">
      {{ item | titlecase }}
    </a>
  `,
  styles: [],
})
export class SidebarItemComponent implements OnInit {
  @Input() routerLink!: string;
  @Input() item!: string;

  constructor() {}

  ngOnInit(): void {}
}
