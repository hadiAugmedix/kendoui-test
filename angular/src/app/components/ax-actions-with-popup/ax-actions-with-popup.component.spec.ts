import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxActionsWithPopupComponent } from './ax-actions-with-popup.component';

describe('AxActionsWithPopupComponent', () => {
  let component: AxActionsWithPopupComponent;
  let fixture: ComponentFixture<AxActionsWithPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxActionsWithPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxActionsWithPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
