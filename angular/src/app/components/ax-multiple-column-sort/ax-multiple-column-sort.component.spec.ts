import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxMultipleColumnSortComponent } from './ax-multiple-column-sort.component';

describe('AxMultipleColumnSortComponent', () => {
  let component: AxMultipleColumnSortComponent;
  let fixture: ComponentFixture<AxMultipleColumnSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxMultipleColumnSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxMultipleColumnSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
