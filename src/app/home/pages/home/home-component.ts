import { Component, OnInit, signal } from '@angular/core';
import { MoviesService } from '../../../movies/services/movies-service';
import { PopularResponse } from '../../../movies/models/popular-response-model';
import { TmdbConfigStore } from '../../../TMDB/stores/tmdb-config-store';
import { FooterComponent } from '../footer/footer-component';



@Component({
  selector: 'app-home-component',
  imports: [FooterComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {

  popularMovies = signal<PopularResponse | null>(null);
  baseUrl!: string | null;
  posterSize!: string | null;
  fullPosterPath!: string | null;

  constructor(
    private moviesService: MoviesService,
    private tmdbConfigStore: TmdbConfigStore
  ) { }

  ngOnInit(): void {
    this.getPopularMovies();
    this.baseUrl = this.tmdbConfigStore.imageBaseUrl;
    this.posterSize = this.tmdbConfigStore.posterSizes[1];
    this.fullPosterPath = `${this.baseUrl}${this.posterSize}`;
  }

  getPopularMovies() {
    const language = 'en-US';
    const page = 1;

    this.moviesService.getPopularMovies(language, page).subscribe((response: PopularResponse) => {
      this.popularMovies.set(response);
    })
  }

}
