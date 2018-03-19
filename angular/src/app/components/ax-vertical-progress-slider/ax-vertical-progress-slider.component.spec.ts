import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxVerticalProgressSliderComponent } from './ax-vertical-progress-slider.component';

describe('AxVerticalProgressSliderComponent', () => {
  let component: AxVerticalProgressSliderComponent;
  let fixture: ComponentFixture<AxVerticalProgressSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxVerticalProgressSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxVerticalProgressSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
