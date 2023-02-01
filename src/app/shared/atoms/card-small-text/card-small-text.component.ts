import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "atom-card-small-text",
  template: `
    <p class="card-text">
      <small class="text-muted">{{ text }}</small>
    </p>
  `,
  styles: [],
})
export class CardSmallTextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() text!: string;
}
