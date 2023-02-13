import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-recharge-form",
  template: `
    <form (ngSubmit)="submit()">
      <molecule-recharge-input
        (emitInputChange)="change($event)"
      ></molecule-recharge-input>
    </form>
  `,
  styles: [],
})
export class RechargeFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() eventRechargeButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() emitInputChange: EventEmitter<number> = new EventEmitter<number>();

  submit() {
    this.eventRechargeButton.emit();
  }

  change($event: number) {
    this.emitInputChange.emit($event);
  }
}
