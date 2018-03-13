import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxStickyTableHeaderComponent } from './ax-sticky-table-header.component';

describe('AxStickyTableHeaderComponent', () => {
  let component: AxStickyTableHeaderComponent;
  let fixture: ComponentFixture<AxStickyTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxStickyTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxStickyTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
