import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxReadLessInTableCellComponent } from './ax-read-less-in-table-cell.component';

describe('AxReadLessInTableCellComponent', () => {
  let component: AxReadLessInTableCellComponent;
  let fixture: ComponentFixture<AxReadLessInTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxReadLessInTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxReadLessInTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
