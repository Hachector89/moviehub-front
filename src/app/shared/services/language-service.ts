import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private tr: TranslocoService
  ) {}

  setLang(lang: string) {
    this.tr.setActiveLang(lang);
  }

  get activeLang() {
    return this.tr.getActiveLang();
  }

  get availableLangs() {
    return this.tr.getAvailableLangs() as string[];
  }
}
