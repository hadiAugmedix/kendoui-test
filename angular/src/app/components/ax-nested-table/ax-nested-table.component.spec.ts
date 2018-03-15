import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxNestedTableComponent } from './ax-nested-table.component';

describe('AxNestedTableComponent', () => {
  let component: AxNestedTableComponent;
  let fixture: ComponentFixture<AxNestedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxNestedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxNestedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
