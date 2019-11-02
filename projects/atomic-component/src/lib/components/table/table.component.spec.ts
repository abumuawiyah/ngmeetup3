import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableDirective } from "./table.directive";

describe("TableDirective", () => {
  let component: TableDirective;
  let fixture: ComponentFixture<TableDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
