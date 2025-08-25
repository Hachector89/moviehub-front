import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { TitleCasePipe } from '@angular/common'
import { toSignal } from '@angular/core/rxjs-interop';

import { LanguageService } from '../../services/language-service'

@Component({
  selector: 'app-language-selector-component',
  imports: [
    MatSelectModule,
    TranslocoModule,
    TitleCasePipe
  ],
  templateUrl: './language-selector-component.html',
  styleUrl: './language-selector-component.css'
})
export class LanguageSelectorComponent {

  langs: string[] = [];
  activeLang!: () => string;

  constructor(
    private languageService: LanguageService
  ) {
    this.langs = this.languageService.availableLangs;

    this.activeLang = toSignal(this.languageService.activeLang$, {
      initialValue: this.languageService.activeLang
    });
  }

  changeLang(lang: string) {
    this.languageService.setLang(lang);
  }

}
