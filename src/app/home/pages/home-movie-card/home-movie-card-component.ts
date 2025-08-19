import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


import { MovieCardBaseComponent } from '../../../shared/components/movie-card-base/movie-card-base-component';
import { MovieDetail } from '../../../shared/models/movie-detail-response-model';

@Component({
  selector: 'app-home-movie-card-component',
  imports: [MatCardModule, DatePipe],
  templateUrl: './home-movie-card-component.html',
  styleUrl: './home-movie-card-component.css'
})
export class HomeMovieCardComponent extends MovieCardBaseComponent {

  @Input({ required: true }) movieDetail!: MovieDetail;

}
