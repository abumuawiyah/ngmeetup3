import {
  Directive,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit
} from "@angular/core";
import { css } from "emotion";

@Directive({
  selector: "[table-footer]"
})
export class TFooterDirective implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() customStyle: string;

  ngOnInit() {
    // const { customStyle } = this;
  }

  ngAfterContentInit() {}
}
