import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBlocPage } from './detail-bloc.page';

describe('DetailBlocPage', () => {
  let component: DetailBlocPage;
  let fixture: ComponentFixture<DetailBlocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBlocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBlocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
