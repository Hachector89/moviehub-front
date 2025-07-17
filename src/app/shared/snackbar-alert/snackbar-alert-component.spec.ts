import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarAlertComponent } from './snackbar-alert-component';

describe('SnackbarAlert', () => {
  let component: SnackbarAlertComponent;
  let fixture: ComponentFixture<SnackbarAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
