import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilComi3Page } from './profil-comi3.page';

describe('ProfilComi3Page', () => {
  let component: ProfilComi3Page;
  let fixture: ComponentFixture<ProfilComi3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilComi3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilComi3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
