import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPartiPage } from './detail-parti.page';

describe('DetailPartiPage', () => {
  let component: DetailPartiPage;
  let fixture: ComponentFixture<DetailPartiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPartiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPartiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
