import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCoalition1Page } from './profil-coalition1.page';

describe('ProfilCoalition1Page', () => {
  let component: ProfilCoalition1Page;
  let fixture: ComponentFixture<ProfilCoalition1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCoalition1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCoalition1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
