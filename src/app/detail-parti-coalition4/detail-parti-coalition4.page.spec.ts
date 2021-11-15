import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPartiCoalition4Page } from './detail-parti-coalition4.page';

describe('DetailPartiCoalition4Page', () => {
  let component: DetailPartiCoalition4Page;
  let fixture: ComponentFixture<DetailPartiCoalition4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPartiCoalition4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPartiCoalition4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
