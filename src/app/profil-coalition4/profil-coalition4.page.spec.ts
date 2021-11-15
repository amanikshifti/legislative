import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCoalition4Page } from './profil-coalition4.page';

describe('ProfilCoalition4Page', () => {
  let component: ProfilCoalition4Page;
  let fixture: ComponentFixture<ProfilCoalition4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCoalition4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCoalition4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
