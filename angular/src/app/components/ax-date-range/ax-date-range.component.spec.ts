import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxDateRangeComponent } from './ax-date-range.component';

describe('AxDateRangeComponent', () => {
  let component: AxDateRangeComponent;
  let fixture: ComponentFixture<AxDateRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxDateRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
