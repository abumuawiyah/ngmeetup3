import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "atomic-component";

storiesOf("Components|Molecules/Breadcrumb", module)
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
        <m-breadcrumbs>
          <ng-template let-selectedItem="selectedItem">
            <ul class="breadcrumb">
              <li><a href="#">Home</a></li>
              <li><a href="#">Pictures</a></li>
              <li><a href="#">Summer 15</a></li>
              <li>Italy</li>
            </ul>
          </ng-template>
        </m-breadcrumbs>
      `,
      props: {}
    };
  });
