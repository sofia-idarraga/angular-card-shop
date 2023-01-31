import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "atom-sidebar-title",
  template: ` <h3 class="text-light">{{ text }}</h3> `,
  styles: [],
})
export class SidebarTitleComponent implements OnInit {
  constructor() {}

  @Input() text!: string;

  ngOnInit(): void {}
}
