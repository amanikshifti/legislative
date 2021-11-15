import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCirPage } from './detail-cir.page';

describe('DetailCirPage', () => {
  let component: DetailCirPage;
  let fixture: ComponentFixture<DetailCirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
