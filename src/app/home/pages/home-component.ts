import { Component, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MoviesService } from '../../movies/services/movies-service';
import { PopularResponse } from '../../movies/models/popular-response-model';
import { FooterComponent } from './footer/footer-component';
import { HomeMovieCardComponent } from './home-movie-card/home-movie-card-component';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  selector: 'app-home-component',
  imports: [FooterComponent, HomeMovieCardComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

  popularMovies = signal<PopularResponse | null>(null);
  langCountryCode!: () => string;

  constructor(
    private moviesService: MoviesService,
    private languageService: LanguageService,
  ) {
    this.langCountryCode = toSignal(
      this.languageService.activeLangCountryCode$,
      { initialValue: this.languageService.activeLangCountryCode }
    );

    effect(() => {
      this.getPopularMovies(this.langCountryCode());
    });
  }

  getPopularMovies(language: string) {
    const page = 1;
    this.moviesService.getPopularMoviesWithFallback(language, page).subscribe((response: PopularResponse) => {
      this.popularMovies.set(response);
    });
  }
}
