import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComi2Page } from './detail-comi2.page';

describe('DetailComi2Page', () => {
  let component: DetailComi2Page;
  let fixture: ComponentFixture<DetailComi2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComi2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComi2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
