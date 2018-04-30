import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxDropdownModalComponent } from './ax-dropdown-modal.component';

describe('AxDropdownModalComponent', () => {
  let component: AxDropdownModalComponent;
  let fixture: ComponentFixture<AxDropdownModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxDropdownModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxDropdownModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
