import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxAddRowInFlyComponent } from './ax-add-row-in-fly.component';

describe('AxAddRowInFlyComponent', () => {
  let component: AxAddRowInFlyComponent;
  let fixture: ComponentFixture<AxAddRowInFlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxAddRowInFlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxAddRowInFlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
