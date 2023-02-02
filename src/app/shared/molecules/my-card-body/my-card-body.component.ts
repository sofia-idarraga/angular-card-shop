import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "molecule-my-card-body",
  templateUrl: "./my-card-body.component.html",
  styles: [],
})
export class MyCardBodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() title!: string;
  @Input() id!: string;
  @Input() description!: string;
  @Input() price!: string;
}
