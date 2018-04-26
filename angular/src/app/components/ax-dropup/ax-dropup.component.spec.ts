import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxDropupComponent } from './ax-dropup.component';

describe('AxDropupComponent', () => {
  let component: AxDropupComponent;
  let fixture: ComponentFixture<AxDropupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxDropupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxDropupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
