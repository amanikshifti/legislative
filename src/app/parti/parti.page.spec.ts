import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiPage } from './parti.page';

describe('PartiPage', () => {
  let component: PartiPage;
  let fixture: ComponentFixture<PartiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
