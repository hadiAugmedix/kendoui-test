import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxCheckUncheckSelectBoxComponent } from './ax-check-uncheck-select-box.component';

describe('AxCheckUncheckSelectBoxComponent', () => {
  let component: AxCheckUncheckSelectBoxComponent;
  let fixture: ComponentFixture<AxCheckUncheckSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxCheckUncheckSelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxCheckUncheckSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
