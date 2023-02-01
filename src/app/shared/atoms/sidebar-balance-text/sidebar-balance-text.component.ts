import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "atom-sidebar-balance-text",
  template: ` <p class="card-text text-white">{{ text }}</p> `,
  styles: [],
})
export class SidebarBalanceTextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() text!: string;
}
