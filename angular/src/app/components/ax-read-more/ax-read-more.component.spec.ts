import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxReadMoreComponent } from './ax-read-more.component';

describe('AxReadMoreComponent', () => {
  let component: AxReadMoreComponent;
  let fixture: ComponentFixture<AxReadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxReadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
