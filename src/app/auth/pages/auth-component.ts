import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { TitleCasePipe } from '@angular/common'
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../services/auth-service';
import { EmailVerificationDialogComponent } from './email-verification-dialog/email-verification-dialog-component'
import { SnackbarAlertComponent } from '../../shared/snackbar-alert/snackbar-alert-component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha-2';

@Component({
  selector: 'app-auth-component',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    TranslocoModule,
    TitleCasePipe,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  templateUrl: './auth-component.html',
  styleUrl: './auth-component.css'
})
export class AuthComponent implements OnInit {
  mode = signal<'login' | 'register'>('login');
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tr: TranslocoService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    if (this.isLogin()) {
      return this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        recaptchaReactive: ['', Validators.required]
      });
    } else {
      return this.fb.group({
        username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        recaptchaReactive: ['', Validators.required]
      }, { validators: this.passwordsMatchValidator });
    }
  }

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  isLogin() {
    return this.mode() === 'login';
  }

  toggleMode() {
    this.mode.update((m) => (m === 'login' ? 'register' : 'login'));
    this.form = this.buildForm();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  onSubmit() {
    if (this.form.invalid) return;

    const { email, password, username, recaptchaReactive } = this.form.value;

    if (this.isLogin()) {
      this.authService.login(email, password, recaptchaReactive).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => {
          const msg = err?.error?.error || this.tr.translate('auth.loginFailed');

          this.showSnackbar(msg, 'error');
        }
      })
    } else {
      this.authService.register(username, email, password, recaptchaReactive).subscribe({
        next: () => {
          this.dialog.open(EmailVerificationDialogComponent, {
            data: { email }
          });
          this.toggleMode();
        },
        error: (err) => {
          const msg = err?.error?.error || this.tr.translate('auth.registrationFailed');

          this.showSnackbar(msg, 'error');
        }
      })
    }
  }

  showSnackbar(msg: string, type: 'success' | 'error') {
    this.snackBar.openFromComponent(SnackbarAlertComponent, {
      data: { message: msg, icon: type },
      panelClass: [`custom-snackbar-${type}`],
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 4000,
    });
  }

  executeRecaptcha(token: string | null): void {
    console.log('TOKEN:', token);
  }

}
