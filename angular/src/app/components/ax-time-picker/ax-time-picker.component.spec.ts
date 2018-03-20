import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxTimePickerComponent } from './ax-time-picker.component';

describe('AxTimePickerComponent', () => {
  let component: AxTimePickerComponent;
  let fixture: ComponentFixture<AxTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
