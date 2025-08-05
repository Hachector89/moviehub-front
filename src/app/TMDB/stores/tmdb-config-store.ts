import { Injectable, signal } from '@angular/core';
import { TMDBConfig } from '../models/tmdb-config-response-model';

@Injectable({ providedIn: 'root' })
export class TmdbConfigStore {
  config = signal<TMDBConfig | null>(null);

  setConfig(config: TMDBConfig) {
    this.config.set(config);
  }

  get imageBaseUrl(): string | null {
    const config = this.config();
    return config?.images?.secure_base_url ?? null;
  }

  get posterSizes(): string[] {
    return this.config()?.images?.poster_sizes ?? [];
  }
}
