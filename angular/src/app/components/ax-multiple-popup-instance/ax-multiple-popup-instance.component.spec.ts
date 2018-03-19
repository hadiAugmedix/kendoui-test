import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxMultiplePopupInstanceComponent } from './ax-multiple-popup-instance.component';

describe('AxMultiplePopupInstanceComponent', () => {
  let component: AxMultiplePopupInstanceComponent;
  let fixture: ComponentFixture<AxMultiplePopupInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxMultiplePopupInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxMultiplePopupInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
