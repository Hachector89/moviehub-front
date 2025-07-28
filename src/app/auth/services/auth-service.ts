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

  register(username: string, email: string, password: string, token: string): Observable<void> {
    return this.http.post<void>(`${this.authUrl}/register`, { username, email, password, token });
  }

  login(email: string, password: string, token: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}/login`, { email, password, token }).pipe(
      tap((res) => {
        if (res?.token) {
          localStorage.setItem('token', res.token);
        }
      })
    );
  }

  verifyEmailToken(token: string): Observable<void> {
    return this.http.get<void>(`${this.authUrl}/verify`, { params: { token } });
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }


}
