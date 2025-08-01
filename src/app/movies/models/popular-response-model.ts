import { MovieDetail } from './detail-response-model'

export interface PopularResponse {
  page: number;
  results: MovieDetail[];
  total_pages: number;
  total_results: number;
}
