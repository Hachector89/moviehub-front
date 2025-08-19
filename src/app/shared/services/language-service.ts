import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly langMap: Record<string, string> = {
    en: 'en-US',
    es: 'es-ES',
  };

  activeLangCountryCode$!: Observable<string>;

  constructor(
    private tr: TranslocoService
  ) {
    this.activeLangCountryCode$ = this.tr.langChanges$.pipe(
      map(lang => this.langMap[lang] ?? 'en-US')
    );
  }

  setLang(lang: string) {
    this.tr.setActiveLang(lang);
  }

  get activeLang() {
    return this.tr.getActiveLang();
  }

  get availableLangs() {
    return this.tr.getAvailableLangs() as string[];
  }

  get activeLangCountryCode(): string {
    return this.langMap[this.activeLang] ?? 'en-US';
  }

  langCountryCode(language: string = 'en'): string {
    return this.langMap[language] ?? 'en-US';
  }


}
