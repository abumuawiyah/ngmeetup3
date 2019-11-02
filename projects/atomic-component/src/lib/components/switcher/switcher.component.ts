import {
  Component,
  ContentChild,
  TemplateRef,
  Directive,
  HostBinding,
  ElementRef,
  Inject,
  forwardRef,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  AfterViewInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { fromEvent, Subject, BehaviorSubject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Directive({
  selector: "[switcherToggleOn]",
  exportAs: "switcherToggleOn"
})
export class SwitcherToggleOnDirective
  implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding("class") className = "toggle-btn toggle-btn-on";
  private destroy = new Subject<void>();

  constructor(
    private element: ElementRef,
    @Inject(forwardRef(() => SwitcherComponent))
    private switcher: SwitcherComponent
  ) {}

  ngOnInit() {
    console.log("className", this.className);
    console.log(this.switcher.buttonClick);
  }

  ngAfterViewInit() {
    fromEvent(this.element.nativeElement, "click")
      .pipe(takeUntil(this.destroy))
      .subscribe(_ => this.switcher.buttonClick("on"));
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}

@Directive({
  selector: "[switcherToggleOff]",
  exportAs: "switcherToggleOff"
})
export class SwitcherToggleOffDirective
  implements OnInit, AfterViewInit, OnDestroy {
  private destroy = new Subject<void>();

  constructor(
    private element: ElementRef,
    @Inject(forwardRef(() => SwitcherComponent))
    private switcher: SwitcherComponent
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent(this.element.nativeElement, "click")
      .pipe(takeUntil(this.destroy))
      .subscribe(_ => this.switcher.buttonClick("off"));
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}

export const SWITCHER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitcherComponent),
  multi: true
};

@Component({
  selector: "a-switcher",
  exportAs: "a-switcher",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="state | async as switcherState">
      <ng-container
        *ngTemplateOutlet="template; context: switcherState"
      ></ng-container>
    </ng-container>
  `,
  providers: [SWITCHER_VALUE_ACCESSOR]
})
export class SwitcherComponent implements AfterViewInit, OnDestroy {
  @ContentChild(TemplateRef, { static: false }) template!: TemplateRef<any>;
  @ContentChild(SwitcherToggleOnDirective, { static: false })
  on!: SwitcherToggleOnDirective;
  @ContentChild(SwitcherToggleOffDirective, { static: false })
  off!: SwitcherToggleOffDirective;

  state = new BehaviorSubject({ status: "off" });

  private _onChange = (value: any) => {};

  buttonClick(state) {
    this.state.next({ status: state });
  }

  ngAfterViewInit() {
    this.state.next({ status: "on" });
  }

  ngOnDestroy() {}
}
