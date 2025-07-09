import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, NgIf, RouterModule],
  templateUrl: './app-navbar.html',
  styleUrl: './app-navbar.css'
})
export class AppNavbar {
  @Output() menuToggle = new EventEmitter<void>();
}
