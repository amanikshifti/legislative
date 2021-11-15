import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComZPage } from './detail-com-z.page';

describe('DetailComZPage', () => {
  let component: DetailComZPage;
  let fixture: ComponentFixture<DetailComZPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComZPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComZPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
