import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxRemoteDataBindComponent } from './ax-remote-data-bind.component';

describe('AxRemoteDataBindComponent', () => {
  let component: AxRemoteDataBindComponent;
  let fixture: ComponentFixture<AxRemoteDataBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxRemoteDataBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxRemoteDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
