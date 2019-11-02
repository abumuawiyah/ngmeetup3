import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { css } from "emotion";
import { BoxComponent } from "../../box/box.component";

@Component({
  selector: "ui-ol",
  template: `
    <ng-content></ng-content>
  `
})
export class OlComponent extends BoxComponent implements OnInit {
  @Input() customStyle: string;
  @HostBinding("class") className;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.className = `${this.className} ${css`
      ${this.customStyle}
    `}`;
  }
}
