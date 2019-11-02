import { Component, HostBinding, Input, AfterContentInit } from "@angular/core";

@Component({
  selector: "m-tab-panel",
  template: `
    <ng-content
      *ngIf="active"
      [ngClass]="{ 'class1 class2 class3': active }"
    ></ng-content>
  `
})
export class TabPanelComponent implements AfterContentInit {
  // @HostBinding("class") className = "";
  @Input() active: boolean;
  @Input() css: object;

  ngAfterContentInit() {
    const { css } = this;
  }
}
