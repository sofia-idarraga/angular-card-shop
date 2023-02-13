import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "molecule-card-body",
  templateUrl: "./card-body.component.html",
  styles: [],
})
export class CardBodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() title!: string;
  @Input() id!: string;
  @Input() description!: string;
  @Input() price!: string;
  @Input() buttonText!: string;
  @Output() eventCardButton: EventEmitter<void> = new EventEmitter<void>();

  emitCardButtonEvent(): void {
    this.eventCardButton.emit();
  }
}
