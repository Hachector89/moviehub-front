import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../../src/environments/environment';
import { LoginResponse } from '../models/login-response-model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = environment.apiBaseUrl;
  private readonly authUrl = this.baseUrl + '/auth';

  constructor(
    private http: HttpClient
  ) { }

  authRegister(username: string, email: string, password: string): Observable<void> {
    return this.http.post<void>(`${this.authUrl}/register`, { username, email, password });
  }

  authLogin(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}/login`, { email, password }).pipe(
      tap((res) => {
        if (res?.token) {
          localStorage.setItem('token', res.token);
        }
      })
    );
  }

  authLogout() {
    localStorage.removeItem('token');
  }

  authGetToken(): string | null {
    return localStorage.getItem('token');
  }

  authIsLoggedIn(): boolean {
    return !!this.authGetToken();
  }

}
