import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "atom-card-text",
  template: ` <p class="card-text">{{ text }}</p> `,
  styles: [],
})
export class CardTextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() text!: string;
}
