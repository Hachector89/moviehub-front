import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { NotificationBarService } from '../../../shared/services/notification-bar-service';
import { TranslocoService } from '@jsverse/transloco';


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
    private router: Router,
    private notifService: NotificationBarService,
    private tr: TranslocoService,
  ) { }

  ngOnInit(): void {
    const token = this.getToken();
    if (token !== '') this.verifyToken(token);
  }

  getToken(): string {
    const token = this.activatedRoute.snapshot.queryParamMap.get('token');
    if (!token) {
      const msg = this.tr.translate('auth.verificationInvalid');
      this.notifService.showSnackbar(msg, 'error');
      this.router.navigate(['/auth']);
      return '';
    }
    return token;
  }

  private verifyToken(token: string): void {
    this.authService.verifyEmailToken(token).subscribe({
      next: () => {
        const msg = this.tr.translate('auth.verificationSuccess');
        this.notifService.showSnackbar(msg, 'success');
        this.router.navigate(['/auth']);
      },
      error: (err) => {
        const msg = err.error?.error || this.tr.translate('auth.verificationFailed');;
        this.notifService.showSnackbar(msg, 'error');
        this.router.navigate(['/auth']);
      }
    });
  }

}
