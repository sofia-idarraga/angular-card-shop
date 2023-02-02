import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-my-card",
  templateUrl: "./my-card.component.html",
  styles: [],
})
export class MyCardComponent implements OnInit {
  constructor() {}

  @Input() src!: string;
  @Input() title!: string;
  @Input() id!: string;
  @Input() description!: string;
  @Input() price!: string;

  ngOnInit(): void {}
}
