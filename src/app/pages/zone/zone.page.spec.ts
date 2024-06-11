import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZonePage } from './zone.page';

describe('ZonePage', () => {
  let component: ZonePage;
  let fixture: ComponentFixture<ZonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
