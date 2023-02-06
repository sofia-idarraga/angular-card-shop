import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "molecule-page-title",
  template: `
    <atom-page-title [text]="text"></atom-page-title>
    <hr />
  `,
  styles: [],
})
export class PageTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() text!: string;
}
