import { Routes } from '@angular/router';
import { LayoutComponent } from './home/pages/layout/layout-component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home/pages/home-component').then((m) => m.HomeComponent),
      },
      {
        path: 'auth',
        loadComponent: () =>
          import('./auth/pages/auth-component').then((m) => m.AuthComponent),
      },
      {
        path: 'verify',
        loadComponent: () =>
          import('./auth/pages/verify-email/verify-email-component').then((m) => m.VerifyEmailComponent),
      },
    ]
  }
];
