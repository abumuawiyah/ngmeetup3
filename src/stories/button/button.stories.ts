import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "atomic-component";

storiesOf("Components|Atoms/Button", module)
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
        <ui-theme-provider>
          <ng-template let-palette="palette">
            <a-button
              [variant]="variant"
              [small]="small"
              [disable]="disable"
              (click)="handleClick($event, {data: 1})"
            >
              Button
            </a-button>
          </ng-template>
        </ui-theme-provider>
      `,
      props: {
        variant: select(
          "variant",
          ["primary", "secondary", "success", "warning", "info", "danger"],
          "primary"
        ),
        small: boolean("small", true),
        disable: boolean("disable", false),
        handleClick: action("clicked")
      }
    };
  });
