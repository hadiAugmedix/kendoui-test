import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxListDragSortComponent } from './ax-list-drag-sort.component';

describe('AxListDragSortComponent', () => {
  let component: AxListDragSortComponent;
  let fixture: ComponentFixture<AxListDragSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxListDragSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxListDragSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
