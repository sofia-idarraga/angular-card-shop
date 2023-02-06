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

  @Output() eventRechargeButton = new EventEmitter();
  @Output() emitInputChange = new EventEmitter();

  submit() {
    this.eventRechargeButton.emit();
  }

  change($event: number) {
    this.emitInputChange.emit($event);
  }
}
