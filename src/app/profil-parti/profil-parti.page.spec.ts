import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPartiPage } from './profil-parti.page';

describe('ProfilPartiPage', () => {
  let component: ProfilPartiPage;
  let fixture: ComponentFixture<ProfilPartiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPartiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPartiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
