import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificationDialogComponent } from './email-verification-dialog-component';

describe('EmailVerificationDialog', () => {
  let component: EmailVerificationDialogComponent;
  let fixture: ComponentFixture<EmailVerificationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailVerificationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
