import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZonelessPage } from './zoneless.page';

describe('ZonelessPage', () => {
  let component: ZonelessPage;
  let fixture: ComponentFixture<ZonelessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonelessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
