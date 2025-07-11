import { Component, EventEmitter, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu-component',
  imports: [MatListModule, RouterModule],
  templateUrl: './side-menu-component.html',
  styleUrl: './side-menu-component.css'
})
export class SideMenuComponent {
  @Output() close = new EventEmitter<void>();
}
