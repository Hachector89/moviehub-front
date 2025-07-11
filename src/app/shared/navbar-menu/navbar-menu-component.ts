import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-menu-component',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './navbar-menu-component.html',
  styleUrl: './navbar-menu-component.css'
})
export class NavbarMenuComponent {
  @Output() menuToggle = new EventEmitter<void>();
}
