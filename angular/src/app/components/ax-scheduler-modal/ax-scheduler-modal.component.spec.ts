import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxSchedulerModalComponent } from './ax-scheduler-modal.component';

describe('AxSchedulerModalComponent', () => {
  let component: AxSchedulerModalComponent;
  let fixture: ComponentFixture<AxSchedulerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxSchedulerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxSchedulerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
