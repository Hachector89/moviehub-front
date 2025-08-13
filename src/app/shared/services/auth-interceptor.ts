import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth-service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {
    const request = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`
      }
    });
    return next(request);
  }

  return next(req);
};
