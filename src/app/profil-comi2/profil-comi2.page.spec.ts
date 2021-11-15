import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilComi2Page } from './profil-comi2.page';

describe('ProfilComi2Page', () => {
  let component: ProfilComi2Page;
  let fixture: ComponentFixture<ProfilComi2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilComi2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilComi2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
