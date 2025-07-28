import { Component, EventEmitter, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

import { LanguageSelectorComponent } from '../language-selector/language-selector-component'

@Component({
  selector: 'app-side-menu-component',
  imports: [MatListModule, RouterModule, LanguageSelectorComponent, TranslocoModule],
  templateUrl: './side-menu-component.html',
  styleUrl: './side-menu-component.css'
})
export class SideMenuComponent {
  @Output() close = new EventEmitter<void>();
}
