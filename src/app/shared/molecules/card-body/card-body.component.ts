import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "molecule-card-body",
  templateUrl: "./card-body.component.html",
  styles: [],
})
export class CardBodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() src!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: string;
  @Input() buttonText!: string;
  @Output() eventCardButton = new EventEmitter();

  emitCardButtonEvent(): void {
    this.eventCardButton.emit();
  }
}
