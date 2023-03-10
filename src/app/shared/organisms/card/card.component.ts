import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styles: [],
})
export class CardComponent {
  constructor() {}

  @Input() src!: string;
  @Input() title!: string;
  @Input() id!: string;
  @Input() description!: string;
  @Input() price!: string;
  @Input() buttonText!: string;
  @Output() eventCardButton: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {}

  emitCardButtonEvent(): void {
    this.eventCardButton.emit();
  }
}
