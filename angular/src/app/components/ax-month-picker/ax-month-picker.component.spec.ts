import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxMonthPickerComponent } from './ax-month-picker.component';

describe('AxMonthPickerComponent', () => {
  let component: AxMonthPickerComponent;
  let fixture: ComponentFixture<AxMonthPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxMonthPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxMonthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
