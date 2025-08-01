import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../src/environments/environment';
import { PopularResponse } from '../models/popular-response-model';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly baseUrl = environment.apiBaseUrl;
  private readonly moviesUrl = this.baseUrl + '/movies';

  constructor(
    private http: HttpClient
  ) { }

  getPopularMovies(language: string = 'en-US', page: number = 1): Observable<PopularResponse> {
    const params = new HttpParams()
      .set('language', language)
      .set('page', page.toString());

    return this.http.get<PopularResponse>(`${this.moviesUrl}/popular`, { params });
  }


}
