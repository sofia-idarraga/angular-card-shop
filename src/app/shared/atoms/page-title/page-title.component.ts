import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "atom-page-title",
  template: ` <h2>{{ text }}</h2> `,
  styles: [],
})
export class PageTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() text!: string;
}
