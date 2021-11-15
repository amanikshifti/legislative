import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCoalition2Page } from './profil-coalition2.page';

describe('ProfilCoalition2Page', () => {
  let component: ProfilCoalition2Page;
  let fixture: ComponentFixture<ProfilCoalition2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCoalition2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCoalition2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
