import {
  Component,
  HostListener,
  Output,
  EventEmitter,
  Input,
  HostBinding,
  AfterContentChecked
} from "@angular/core";

@Component({
  selector: "m-tab",
  template: `
    <ng-content></ng-content>
  `
})
export class TabComponent implements AfterContentChecked {
  @Input() index: number;
  @Input() active: boolean;
  @Input() css: object;
  @Output() tabClick: EventEmitter<object> = new EventEmitter<object>();
  @HostBinding("class") className;
  @HostListener("click", ["$event"])
  onClick(e) {
    this.tabClick.emit({ index: this.index });
  }

  ngAfterContentChecked() {
    const { css, active } = this;
  }
}
