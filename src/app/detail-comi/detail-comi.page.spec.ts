import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComiPage } from './detail-comi.page';

describe('DetailComiPage', () => {
  let component: DetailComiPage;
  let fixture: ComponentFixture<DetailComiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
