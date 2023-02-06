import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "atom-recharge-input",
  template: `
    <input
      type="number"
      class="form-control p-2 mw-100"
      aria-label="Dollar amount (with dot and two decimal places)"
      max="2000"
      min="0"
      required
      [(ngModel)]="value"
      (change)="change()"
    />
  `,
  styles: [],
})
export class RechargeInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Output() emitInputChange = new EventEmitter();

  value!: number;

  change() {
    this.emitInputChange.emit(this.value);
  }
}
