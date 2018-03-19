import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxPopupFromTableCellComponent } from './ax-popup-from-table-cell.component';

describe('AxPopupFromTableCellComponent', () => {
  let component: AxPopupFromTableCellComponent;
  let fixture: ComponentFixture<AxPopupFromTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxPopupFromTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxPopupFromTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
