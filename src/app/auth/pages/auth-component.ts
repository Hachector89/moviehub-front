import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

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
  ],
  templateUrl: './auth-component.html',
  styleUrl: './auth-component.css'
})
export class AuthComponent {
  mode = signal<'login' | 'register'>('login');

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, { validators: this.passwordsMatchValidator });
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
  }

  onSubmit() {
    if (this.form.invalid) return;

    const { email, password, username, confirmPassword } = this.form.value;

    if (!this.isLogin() && password !== confirmPassword) {
      alert('Passwords must match.');
      return;
    }

    if (this.isLogin()) {
      console.log('🔐 Login:', { email, password });
      // call to authServiceLogin
    } else {
      console.log('📝 Registro:', { username, email, password });
      // call to authServiceRegister
    }
  }

}
