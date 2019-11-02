import {
  Component,
  ContentChild,
  TemplateRef,
  ChangeDetectionStrategy,
  OnDestroy,
  AfterViewInit,
  HostBinding
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";

@Component({
  selector: "m-breadcrumbs",
  exportAs: "Breadcrumbs",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="state | async as breadcrumbState">
      <ng-container
        *ngTemplateOutlet="template; context: breadcrumbState"
      ></ng-container>
    </ng-container>
  `
})
export class BreadcrumbsComponent implements AfterViewInit, OnDestroy {
  @ContentChild(TemplateRef, { static: false }) template!: TemplateRef<any>;
  @HostBinding("class") className: string;

  state = new BehaviorSubject({ selectedItem: {}, highlightedItem: {} });

  itemClick(item) {
    this.state.next({
      selectedItem: item,
      highlightedItem: this.state.getValue().highlightedItem
    });
  }

  itemHover(item) {
    this.state.next({
      highlightedItem: item,
      selectedItem: this.state.getValue().selectedItem
    });
  }

  ngAfterViewInit() {
    this.state.next({
      selectedItem: { value: "" },
      highlightedItem: { value: "" }
    });
    this.className = css([
      {
        "ul.breadcrumb": {
          padding: "8px 16px",
          listStyle: "none",
          backgroundColor: "#eee"
        }
      },
      {
        "ul.breadcrumb li": {
          display: "inline"
        }
      },
      {
        "ul.breadcrumb li + li:before": {
          padding: "8px",
          color: "black",
          content: "'/'"
        }
      },
      {
        "ul.breadcrumb li a": {
          color: "green"
        }
      }
    ]);
  }

  ngOnDestroy() {}
}
