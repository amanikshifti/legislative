import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilComi4Page } from './profil-comi4.page';

describe('ProfilComi4Page', () => {
  let component: ProfilComi4Page;
  let fixture: ComponentFixture<ProfilComi4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilComi4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilComi4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
