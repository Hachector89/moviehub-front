import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly LANG_STORAGE_KEY = 'activeLang';

  private readonly langMap: Record<string, string> = {
    en: 'en-US',
    es: 'es-ES',
  };

  activeLangCountryCode$!: Observable<string>;
  activeLang$!: Observable<string>;

  constructor(
    private tr: TranslocoService
  ) {

    const storedLang = localStorage.getItem(this.LANG_STORAGE_KEY);
    if (storedLang && this.availableLangs.includes(storedLang)) {
      this.setLang(storedLang);
    }

    this.activeLang$ = this.tr.langChanges$;

    this.activeLangCountryCode$ = this.tr.langChanges$.pipe(
      map(lang => this.langMap[lang] ?? 'en-US')
    );

    this.tr.langChanges$.subscribe(lang => {
      localStorage.setItem(this.LANG_STORAGE_KEY, lang);
    });
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
