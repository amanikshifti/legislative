import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCoalition5Page } from './profil-coalition5.page';

describe('ProfilCoalition5Page', () => {
  let component: ProfilCoalition5Page;
  let fixture: ComponentFixture<ProfilCoalition5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCoalition5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCoalition5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
