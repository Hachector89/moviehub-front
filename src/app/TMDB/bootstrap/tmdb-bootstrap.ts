import { inject } from '@angular/core';
import { StartupService } from '../services/startup-service';

export function tmdbInitializer(): Promise<void> {
  const startupService = inject(StartupService);
  return startupService.init();
}
