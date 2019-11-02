import {
  Directive,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  forwardRef,
  // ElementRef,
  Inject,
  HostListener,
  ContentChildren
} from "@angular/core";
import { css } from "emotion";
import { TableDirective } from "./table.directive";
import { TRowDirective } from "./trow.directive";

@Directive({
  selector: "[table-body]"
})
export class TBodyDirective implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @HostListener("click") handleClick() {
    this.table.test();
  }
  @Input() customStyle: string;
  @ContentChildren(TRowDirective)
  row!: TRowDirective;

  constructor(
    // private element: ElementRef,
    @Inject(forwardRef(() => TableDirective))
    private table: TableDirective
  ) {}

  ngOnInit() {
    // const { customStyle } = this;
  }

  ngAfterContentInit() {}
}
