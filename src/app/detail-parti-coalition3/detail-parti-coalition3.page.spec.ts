import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPartiCoalition3Page } from './detail-parti-coalition3.page';

describe('DetailPartiCoalition3Page', () => {
  let component: DetailPartiCoalition3Page;
  let fixture: ComponentFixture<DetailPartiCoalition3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPartiCoalition3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPartiCoalition3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
