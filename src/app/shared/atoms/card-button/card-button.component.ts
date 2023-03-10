import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "atom-card-button",
  template: ` <a class="btn btn-info" (click)="click()">{{ text }}</a> `,
  styles: [],
})
export class CardButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() text!: string;
  @Output() eventCardButton: EventEmitter<void> = new EventEmitter<void>();

  click(): void {
    this.eventCardButton.emit();
  }
}
