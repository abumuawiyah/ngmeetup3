import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "atomic-component";

storiesOf("Foundation", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("Typography", () => {
    return {
      template: `
        <ui-theme-provider>
          <ui-box display="flex" flexDirection="column">
            <h2>scale from 5 - 9</h2>
            <ui-typography color="uiBlue" [scale]="5">
              scale 5
            </ui-typography>
            <ui-typography color="uiBlue" [scale]="6">
              scale 6
            </ui-typography>
            <ui-typography color="uiBlue" [scale]="7">
              scale 7
            </ui-typography>
            <ui-typography color="uiBlue" [scale]="8">
              scale 8
            </ui-typography>
            <ui-typography color="uiBlue" [scale]="9">
              scale 9
            </ui-typography>

            <h2>variants</h2>
            <ui-typography variant="light">
              variant light
            </ui-typography>
            <ui-typography variant="regular">
              variant regular
            </ui-typography>
            <ui-typography variant="semibold">
              variant semibold
            </ui-typography>
            <ui-typography variant="bold">
              variant bold
            </ui-typography>

            <h2>color</h2>
            <ui-typography color="uiBlueLight">
              uiBlueLight
            </ui-typography>
            <ui-typography color="uiBlue">
              uiBlue
            </ui-typography>
            <ui-typography color="uiBlueDark">
              uiBlueDark
            </ui-typography>
            <ui-typography color="uiBlueDarker">
              uiBlueDarker
            </ui-typography>
          </ui-box>
        <ui-theme-provider>
      `,
      props: {}
    };
  });
