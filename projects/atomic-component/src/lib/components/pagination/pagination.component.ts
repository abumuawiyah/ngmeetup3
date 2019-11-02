import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit
} from "@angular/core";
import { css } from "emotion";

@Component({
  selector: "m-pagination",
  template: `
    <div class="pagination">
      <a-chevron-up-icon
        [customStyle]="'transform: rotate(-90deg);'"
      ></a-chevron-up-icon>
      <a-button [small]="true">1</a-button>
      <a-button variant="danger" [small]="true">2</a-button>
      <a-button [small]="true">3</a-button>
      <a-button [small]="true">4</a-button>
      <a-button [small]="true">5</a-button>
      <a-chevron-up-icon
        [customStyle]="'transform: rotate(90deg);'"
      ></a-chevron-up-icon>
    </div>
  `
})
export class PaginationComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() customStyle: string;

  constructor() {}

  ngOnInit() {
    const { customStyle } = this;
    this.className = css([
      {
        ".pagination": {
          display: "flex",
          alignItems: "center"
        }
      },
      `${customStyle}`
    ]);
  }

  ngAfterContentInit() {}
}
