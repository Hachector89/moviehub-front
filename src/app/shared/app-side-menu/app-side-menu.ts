import { Component, EventEmitter, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [MatListModule, RouterModule],
  templateUrl: './app-side-menu.html',
  styleUrl: './app-side-menu.css'
})
export class AppSideMenu {
  @Output() close = new EventEmitter<void>();
}
