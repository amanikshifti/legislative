import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPartiCoalition2Page } from './detail-parti-coalition2.page';

describe('DetailPartiCoalition2Page', () => {
  let component: DetailPartiCoalition2Page;
  let fixture: ComponentFixture<DetailPartiCoalition2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPartiCoalition2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPartiCoalition2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
