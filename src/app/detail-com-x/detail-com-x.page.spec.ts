import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComXPage } from './detail-com-x.page';

describe('DetailComXPage', () => {
  let component: DetailComXPage;
  let fixture: ComponentFixture<DetailComXPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComXPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComXPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
