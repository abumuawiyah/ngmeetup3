import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit
} from "@angular/core";
import { css } from "emotion";

@Component({
  selector: "m-card",
  template: `
    <article>
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        style="width:100%"
      />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </article>
  `
})
export class CardComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() customStyle: string;

  constructor() {}

  ngOnInit() {
    const { customStyle } = this;
    this.className = css([
      {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        width: "92%",
        maxWidth: "300px",
        "&:hover": {
          boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)"
        },
        ".container": {
          padding: "2px 16px"
        },
        h4: {
          fontFamily: '"Segoe UI", Arial, sans-serif',
          fontWeight: 400,
          margin: "10px 0"
        }
      },
      `${customStyle}`
    ]);
  }

  ngAfterContentInit() {}
}
