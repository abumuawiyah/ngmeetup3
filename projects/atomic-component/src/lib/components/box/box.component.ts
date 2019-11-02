import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { css } from "emotion";

@Component({
  selector: "ui-box",
  template: `
    <ng-content></ng-content>
  `
})
export class BoxComponent implements OnInit {
  @Input() customStyle: any;
  @Input() display: any;
  @Input() bgColor: any;
  @Input() w: any;
  @Input() h: any;
  @Input() p: any;
  @Input() pl: any;
  @Input() pr: any;
  @Input() pt: any;
  @Input() pb: any;
  @Input() m: any;
  @Input() ml: any;
  @Input() mr: any;
  @Input() mt: any;
  @Input() mb: any;
  @Input() flexDirection: any;
  @Input() alignItems: any;
  @Input() alignContent: any;
  @Input() flexFlow: any;
  @Input() flexWrap: any;
  @Input() justifyContent: any;
  @Input() flex: any;
  @Input() flexBasis: any;
  @HostBinding("class") className;

  constructor() {}

  ngOnInit() {
    const {
      w,
      h,
      display = "block",
      flexDirection,
      alignItems,
      justifyContent,
      bgColor,
      p,
      pl,
      pr,
      pt,
      pb,
      m,
      ml,
      mr,
      mt,
      mb,
      customStyle = ""
    } = this;

    this.className = css([
      display && {
        display: display
      },
      flexDirection && {
        flexDirection: flexDirection
      },
      alignItems && {
        alignItems: alignItems
      },
      justifyContent && {
        justifyContent: justifyContent
      },
      bgColor && {
        backgroundColor: bgColor
      },
      w && { width: w },
      h && { height: h },

      p && { padding: p },
      pl && { paddingLeft: pl },
      pr && { paddingRight: pr },
      pb && { paddingBottom: pb },
      pt && { paddingTop: pt },

      m && { margin: m },
      ml && { marginLeft: ml },
      mr && { marginRight: mr },
      mb && { marginBottom: mb },
      mt && { marginTop: mt },

      `${customStyle && customStyle}`
    ]);
  }
}
