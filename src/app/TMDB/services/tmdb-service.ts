import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../src/environments/environment';
import { TMDBConfig } from '../models/tmdb-config-response-model'

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

    private readonly baseUrl = environment.apiBaseUrl;
    private readonly configUrl = this.baseUrl + '/tmdb';

    constructor(
    private http: HttpClient
  ) { }

  getTMDBConfig(): Observable<TMDBConfig> {
    return this.http.get<TMDBConfig>(`${this.configUrl}/config`);
  }
}
