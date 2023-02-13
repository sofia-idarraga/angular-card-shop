import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "atom-auth-button",
  template: `
    <button type="button" [class]="buttonClass" (click)="buttonAction()">
      <i [class]="iconClass"></i> {{ text }}
    </button>
  `,
  styles: [],
})
export class AuthButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() buttonClass!: string;
  @Input() iconClass!: string;
  @Input() text!: string;
  @Output() buttonEvent: EventEmitter<void> = new EventEmitter<void>();

  buttonAction() {
    this.buttonEvent.emit();
  }
}
