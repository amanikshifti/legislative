import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilBlocPage } from './profil-bloc.page';

describe('ProfilBlocPage', () => {
  let component: ProfilBlocPage;
  let fixture: ComponentFixture<ProfilBlocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilBlocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilBlocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
