import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCoalition3Page } from './profil-coalition3.page';

describe('ProfilCoalition3Page', () => {
  let component: ProfilCoalition3Page;
  let fixture: ComponentFixture<ProfilCoalition3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCoalition3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCoalition3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
