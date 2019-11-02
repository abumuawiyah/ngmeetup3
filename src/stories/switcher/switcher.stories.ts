import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "atomic-component";

storiesOf("Components|Atoms/Switcher", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("default", () => {
    return {
      template: `
        <ui-box>
        <style>
          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
          }
          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
          }
          .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
          }
          input:checked + .slider {
            background-color: #2196F3;
          }
          input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
          }
          input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
          }
          /* Rounded sliders */
          .slider.round {
            border-radius: 34px;
          }
          .slider.round:before {
            border-radius: 50%;
          }
        </style>

          <a-switcher>
            <ng-template let-status="status">
              <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
              </label>

              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label><br><br>

              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>

              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider round"></span>
              </label>
            </ng-template>
          </a-switcher>
        </ui-box>
      `,
      props: {}
    };
  });
