import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxConfirmBoxComponent } from './ax-confirm-box.component';

describe('AxConfirmBoxComponent', () => {
  let component: AxConfirmBoxComponent;
  let fixture: ComponentFixture<AxConfirmBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxConfirmBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxConfirmBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
