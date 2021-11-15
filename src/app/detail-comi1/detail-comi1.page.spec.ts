import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComi1Page } from './detail-comi1.page';

describe('DetailComi1Page', () => {
  let component: DetailComi1Page;
  let fixture: ComponentFixture<DetailComi1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComi1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComi1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
