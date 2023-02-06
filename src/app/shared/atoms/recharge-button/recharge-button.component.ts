import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "atom-recharge-button",
  template: `
    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
      Recharge
    </button>
  `,
  styles: [],
})
export class RechargeButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
