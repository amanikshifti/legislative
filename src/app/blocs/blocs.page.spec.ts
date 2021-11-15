import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocsPage } from './blocs.page';

describe('BlocsPage', () => {
  let component: BlocsPage;
  let fixture: ComponentFixture<BlocsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
