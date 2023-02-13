import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "molecule-recharge-input",
  template: `
    <div class="input-group mb-3 mw-100">
      <atom-recharge-span></atom-recharge-span>
      <atom-recharge-input
        (emitInputChange)="change($event)"
      ></atom-recharge-input>
      <atom-recharge-button> </atom-recharge-button>
    </div>
  `,
  styles: [],
})
export class RechargeInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() emitInputChange: EventEmitter<number> = new EventEmitter<number>();

  change($event: number) {
    this.emitInputChange.emit($event);
  }
}
