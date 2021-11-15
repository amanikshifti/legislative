import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPartiCoalition5Page } from './detail-parti-coalition5.page';

describe('DetailPartiCoalition5Page', () => {
  let component: DetailPartiCoalition5Page;
  let fixture: ComponentFixture<DetailPartiCoalition5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPartiCoalition5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPartiCoalition5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
