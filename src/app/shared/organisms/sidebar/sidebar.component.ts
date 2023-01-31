import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styles: [],
})
export class SidebarComponent implements OnInit {
  @Input() items: string[] = [];
  @Input() routerLinks: string[] = [];
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
