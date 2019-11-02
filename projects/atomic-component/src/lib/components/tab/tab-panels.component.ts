import {
  Component,
  ContentChildren,
  QueryList,
  HostBinding,
  Input,
  AfterContentInit
} from "@angular/core";

import { TabPanelComponent } from "./tab-panel.component";

@Component({
  selector: "m-tab-panels",
  template: `
    <ng-content></ng-content>
  `
})
export class TabPanelsComponent implements AfterContentInit {
  @HostBinding("class") className = "";
  @Input() css: object;
  @ContentChildren(TabPanelComponent) children!: QueryList<TabPanelComponent>;

  ngAfterContentInit() {
    const { css } = this;
  }
}
