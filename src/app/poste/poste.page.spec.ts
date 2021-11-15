import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostePage } from './poste.page';

describe('PostePage', () => {
  let component: PostePage;
  let fixture: ComponentFixture<PostePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
