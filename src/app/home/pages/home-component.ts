import { Component, Signal } from '@angular/core';
import { MoviesService } from '../../movies/services/movies-service';
import { FooterComponent } from './footer/footer-component';
import { HomeMovieCardComponent } from './home-movie-card/home-movie-card-component';
import { PopularResponse } from '../../movies/models/popular-response-model';

@Component({
  selector: 'app-home-component',
  imports: [FooterComponent, HomeMovieCardComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  popularMovies: Signal<PopularResponse | null>;

  constructor(private moviesService: MoviesService) {
    this.popularMovies = this.moviesService.popularMovies;
  }
}
