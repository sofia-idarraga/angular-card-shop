import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "atom-card-title",
  template: ` <h5 class="card-title">{{ title }}</h5> `,
  styles: [],
})
export class CardTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() title!: string;
}
