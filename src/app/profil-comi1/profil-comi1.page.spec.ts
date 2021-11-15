import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilComi1Page } from './profil-comi1.page';

describe('ProfilComi1Page', () => {
  let component: ProfilComi1Page;
  let fixture: ComponentFixture<ProfilComi1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilComi1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilComi1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
