/**
 *
 * Typography
 *   Description: typography
 */

import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  SimpleChanges,
  Inject,
  forwardRef
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { ThemeProviderComponent } from "../../theme/theme-provider/theme-provider.component";

@Component({
  selector: "ui-typography",
  template: `
    <ng-content></ng-content>
  `
})
export class TypographyComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() customStyle: string;
  @Input() variant: string;
  @Input() scale: number;
  @Input() color: string;
  defaultInputs = new BehaviorSubject<any>({});

  constructor(
    @Inject(forwardRef(() => ThemeProviderComponent))
    private themeProvider: ThemeProviderComponent
  ) {
    console.log(this.themeProvider);
  }

  ngOnChanges(changes: SimpleChanges) {
    const inputs = Object.keys(changes).reduce(function(result, item) {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    const { theme } = this.themeProvider;
    const { variant = "regular" } = inputs;
    return css`
      ${variant === "bold" &&
        css`
          font-weight: bold;
        `}
      ${variant === "semibold" &&
        css`
          font-weight: 600;
        `}
      ${variant === "regular" &&
        css`
          font-weight: 400;
        `}
      ${variant === "light" &&
        css`
          font-weight: 300;
        `}
      ${inputs.color &&
        css`
          color: ${theme.palette[inputs.color]};
        `}
      ${inputs.scale &&
        css`
          font-size: ${theme.scales[`spacing-0${inputs.scale}`]};
        `}
    `;
  }

  ngOnInit() {
    const { customStyle, ...others } = this;
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...others });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngAfterContentInit() {}
}
