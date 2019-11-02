import {
  Component,
  ContentChildren,
  QueryList,
  OnInit,
  HostBinding,
  Input,
  AfterContentInit
} from "@angular/core";
import { TabComponent } from "./tab.component";

@Component({
  selector: "m-tab-list",
  template: `
    <ng-content></ng-content>
  `
})
export class TabListComponent implements AfterContentInit {
  @HostBinding("class") className = "";
  @ContentChildren(TabComponent) children!: QueryList<TabComponent>;

  ngAfterContentInit() {}
}
