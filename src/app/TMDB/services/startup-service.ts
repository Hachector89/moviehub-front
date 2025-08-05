import { Injectable } from '@angular/core';
import { TmdbService } from '../services/tmdb-service';
import { TmdbConfigStore } from '../stores/tmdb-config-store';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StartupService {

    constructor(
      private tmdbService: TmdbService,
      private configStore: TmdbConfigStore,
    ) { }


  async init(): Promise<void> {
    const config = await firstValueFrom(this.tmdbService.getTMDBConfig());
    this.configStore.setConfig(config);
  }
}
