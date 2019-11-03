import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf(
  "Components|Molecules/Card",
  module
)
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
            
            
              <m-card>
                card works!
              </m-card>
            
            
            
          </ng-template> 
        </ui-theme-provider>
      `,
      props: {}
    };
  });
