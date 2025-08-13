import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu-component'
import { NavbarMenuComponent } from '../../../shared/components/navbar-menu/navbar-menu-component';

@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet, NavbarMenuComponent, MatSidenavModule, SideMenuComponent],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css'
})
export class LayoutComponent {

}
