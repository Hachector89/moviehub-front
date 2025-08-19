import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';

import { environment } from '../../../../src/environments/environment';
import { PopularResponse } from '../models/popular-response-model';
import { LanguageService } from '../../shared/services/language-service';
import { MovieDetail } from '../../shared/models/movie-detail-response-model';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly baseUrl = environment.apiBaseUrl;
  private readonly moviesUrl = this.baseUrl + '/movies';

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) { }

  getPopularMovies(language: string = 'en-US', page: number = 1): Observable<PopularResponse> {
    const params = new HttpParams()
      .set('language', language)
      .set('page', page.toString());

    return this.http.get<PopularResponse>(`${this.moviesUrl}/popular`, { params });
  }

  getPopularMoviesWithFallback(language: string = 'en-US', page: number = 1): Observable<PopularResponse> {
    const englishLang = this.languageService.langCountryCode('en');

    return this.getPopularMovies(language, page).pipe(
      switchMap(response => {
        const needsFallback = response.results.filter(
          movie => movie.title === movie.original_title && movie.original_language !== language.split('-')[0]
        );


        if (needsFallback.length === 0) {
          return of(response);
        }

        const requests: Observable<MovieDetail>[] = needsFallback.map(movie =>
          this.getMovieDetails(movie.id, englishLang)
        );

        return forkJoin(requests).pipe(
          map(fallbackMovies => {
            const fixedResults = response.results.map(movie => {
              const fallback = fallbackMovies.find(fm => fm.id === movie.id);
              if (fallback) {
                return { ...movie, title: fallback.title };
              }
              return movie;
            });
            return { ...response, results: fixedResults };
          })
        );
      }));
  }

  getMovieDetails(id: number, language: string = 'en-US'): Observable<MovieDetail> {
    const params = new HttpParams()
      .set('language', language);

    return this.http.get<MovieDetail>(`${this.moviesUrl}/${id}`, { params });
  }
}
