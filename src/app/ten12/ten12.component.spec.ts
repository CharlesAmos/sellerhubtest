import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ten12Component } from './ten12.component';

describe('Ten12Component', () => {
  let component: Ten12Component;
  let fixture: ComponentFixture<Ten12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ten12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ten12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
