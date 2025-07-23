import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarAlertComponent } from '../../../shared/snackbar-alert/snackbar-alert-component';

@Component({
  selector: 'app-verify-email-component',
  imports: [],
  templateUrl: './verify-email-component.html',
  styleUrl: './verify-email-component.css'
})
export class VerifyEmailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const token = this.getToken();
    if (token !== '') this.verifyToken(token);
  }

  getToken(): string {
    const token = this.activatedRoute.snapshot.queryParamMap.get('token');
    if (!token) {
      this.showSnackbar('Invalid verification link', 'error');
      this.router.navigate(['/auth']);
      return '';
    }
    return token;
  }

  private verifyToken(token: string): void {
    this.authService.verifyEmailToken(token).subscribe({
      next: () => {
        this.showSnackbar('Email verified successfully! You can now log in.', 'success');
        this.router.navigate(['/auth']);
      },
      error: (err) => {
        const msg = err.error?.error || 'Verification failed';
        this.showSnackbar(msg, 'error');
        this.router.navigate(['/auth']);
      }
    });
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
}
