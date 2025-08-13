import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { TitleCasePipe } from '@angular/common'


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
export class LanguageSelectorComponent implements OnInit {

  activeLang!: string;
  langs: string[] = [];


  constructor(
    private languageService: LanguageService
  ) {}


  ngOnInit(): void {
    this.initializeLangs();
  }

  initializeLangs(): void {
    this.activeLang = this.languageService.activeLang;
    this.langs = this.languageService.availableLangs;
  }

  changeLang(lang: string) {
    this.languageService.setLang(lang);
    this.activeLang = lang;
  }

}
