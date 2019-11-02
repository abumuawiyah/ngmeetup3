import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "atomic-component";

import { css } from "emotion";

storiesOf("Components|Molecules/Card", module)
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
        <ui-box w="300px">
          <m-card></m-card>
        </ui-box>
      `,
      props: {
        test: css`
          color: rebeccapurple;
          text-decoration: underline;
        `
      }
    };
  });
