import { Component, OnInit, signal } from '@angular/core';

import { MoviesService } from '../../movies/services/movies-service';
import { PopularResponse } from '../../movies/models/popular-response-model';
import { FooterComponent } from './footer/footer-component';
import { HomeMovieCardComponent } from './home-movie-card/home-movie-card-component';


@Component({
  selector: 'app-home-component',
  imports: [FooterComponent, HomeMovieCardComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {

  popularMovies = signal<PopularResponse | null>(null);

  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    const language = 'es-ES';
    const page = 1;

    this.moviesService.getPopularMovies(language, page).subscribe((response: PopularResponse) => {
      this.popularMovies.set(response);
      console.log(response);
    })
  }

}
