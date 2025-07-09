import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideMenu } from './app-side-menu';

describe('AppSideMenu', () => {
  let component: AppSideMenu;
  let fixture: ComponentFixture<AppSideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSideMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSideMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
