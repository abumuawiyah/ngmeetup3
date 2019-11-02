import {
  Directive,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  ContentChild
} from "@angular/core";
import { css } from "emotion";
import { TBodyDirective } from "./tbody.directive";
import { THeaderDirective } from "./theader.directive";
import { TFooterDirective } from "./tfooter.directive";
import { palette } from "../../theme";

@Directive({
  selector: "[m-table]"
})
export class TableDirective implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @ContentChild(TBodyDirective, { static: false })
  tbody!: TBodyDirective;
  @ContentChild(THeaderDirective, { static: false })
  thead!: THeaderDirective;
  @ContentChild(TFooterDirective, { static: false })
  tfoot!: TFooterDirective;
  @Input() customStyle: string;

  ngOnInit() {
    const { customStyle } = this;

    this.className = css([
      {
        fontFamily: "arial, sans-serif",
        borderCollapse: "collapse",
        width: "100%"
      },
      {
        "tbody, tfoot, thead": {
          border: `1px solid ${palette.secondary}`
        }
      },
      {
        "td, th": {
          textAlign: "left",
          padding: "8px"
        }
      },
      {
        "tr:nth-child(even)": {
          backgroundColor: palette.warning
        }
      },
      `${customStyle}`
    ]);
  }

  test() {
    alert(123);
  }

  ngAfterContentInit() {
    this.tbody.className = css({
      color: palette.lightGray
    });
  }
}
