import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "atomic-component";
import { Subscription } from "rxjs";
import { HttpClientModule } from "@angular/common/http";

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { UserService } from "./service";
import { IUser, IResponse } from "./interfaces";

@Component({
  selector: "my-organisms-component",
  template: `
    <ui-box w="600px">
      <table m-table>
        <thead table-header>
          <tr table-header-row>
            <th table-header-cell>Name</th>
            <th table-header-cell>Gender</th>
            <th table-header-cell>Email</th>
          </tr>
        </thead>
        <tbody table-body>
          <tr table-row *ngFor="let user of users">
            <td table-cell (click)="handleCellClick($event)">
              {{ user?.name?.title }} {{ user?.name?.first }}
              {{ user?.name?.last }}
            </td>
            <td table-cell>{{ user?.gender }}</td>
            <td table-cell>{{ user?.email }}</td>
          </tr>
        </tbody>
        <tfoot table-footer [customStyle]="tfoot">
          <tr>
            <td table-cell colspan="3">
              <ui-box [customStyle]="box" w="100%">
                <m-pagination></m-pagination>
              </ui-box>
            </td>
          </tr>
        </tfoot>
      </table>
    </ui-box>
  `,
  styles: [],
  providers: [UserService]
})
export class TableOrganismsComponent implements OnInit, OnDestroy {
  @Output() click: EventEmitter<void> = new EventEmitter();
  users: IUser[];
  errorMessage;
  sub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.sub = this.userService.getUsers().subscribe({
      next: (res: IResponse) => {
        this.users = res.results;
      },
      error: err => (this.errorMessage = err)
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

storiesOf("Components|Organisms", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, AtomicComponentModule, HttpClientModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("Full table features", () => ({
    component: TableOrganismsComponent,
    props: {
      handleCellClick: e => {},
      box: `
            display: flex;
            justify-content: center;
            align-items: center;
        `
    }
  }));
