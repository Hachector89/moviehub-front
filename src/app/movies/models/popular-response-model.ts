import { MovieDetail } from '../../shared/models/movie-detail-response-model'

export interface PopularResponse {
  page: number;
  results: MovieDetail[];
  total_pages: number;
  total_results: number;
}
