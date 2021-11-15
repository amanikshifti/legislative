import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPartiCoalition1Page } from './detail-parti-coalition1.page';

describe('DetailPartiCoalition1Page', () => {
  let component: DetailPartiCoalition1Page;
  let fixture: ComponentFixture<DetailPartiCoalition1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPartiCoalition1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPartiCoalition1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
