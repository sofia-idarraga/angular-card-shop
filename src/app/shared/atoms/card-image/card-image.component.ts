import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "atom-card-image",
  template: ` <img [src]="src" class="card-img-top" alt="..." /> `,
  styles: [],
})
export class CardImageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() src!: string;
}
