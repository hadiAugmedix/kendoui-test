import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxStickyMultipleTableRowOnLeftComponent } from './ax-sticky-multiple-table-row-on-left.component';

describe('AxStickyMultipleTableRowOnLeftComponent', () => {
  let component: AxStickyMultipleTableRowOnLeftComponent;
  let fixture: ComponentFixture<AxStickyMultipleTableRowOnLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxStickyMultipleTableRowOnLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxStickyMultipleTableRowOnLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
