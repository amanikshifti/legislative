import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComYPage } from './detail-com-y.page';

describe('DetailComYPage', () => {
  let component: DetailComYPage;
  let fixture: ComponentFixture<DetailComYPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComYPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComYPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
