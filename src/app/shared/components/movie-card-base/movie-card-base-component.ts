import { Component, Input } from '@angular/core';
import { MovieDetail } from '../../models/movie-detail-response-model'
import { TmdbConfigStore } from '../../../TMDB/stores/tmdb-config-store';

@Component({
  selector: 'app-movie-card-base-component',
  imports: [],
  templateUrl: './movie-card-base-component.html',
  styleUrl: './movie-card-base-component.css'
})
export class MovieCardBaseComponent {

  @Input({ required: true }) movie!: MovieDetail;
  @Input() posterPath!: string | '';

  fullPosterPath!: string | null;

  constructor(
    private tmdbConfigStore: TmdbConfigStore
  ) { }

  ngOnInit(): void {
    this.setPosterPath();
  }

  setPosterPath(): void {
    const baseUrl = this.tmdbConfigStore.imageBaseUrl;
    const posterSize = this.tmdbConfigStore.posterSizes[3];
    this.fullPosterPath = `${baseUrl}${posterSize}`;
  }

  get year(): string {
    return this.movie.release_date
      ? new Date(this.movie.release_date).getFullYear().toString()
      : '';
  }

  get originalTitle(): string {
    const originalTitle = this.movie.original_title.trim().toLowerCase()
      !== this.movie.title.trim().toLowerCase()
      ? this.movie.original_title : '';
    return originalTitle;
  }

}
