import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppSideMenu } from './shared/app-side-menu/app-side-menu'
import { AppNavbar } from './shared/app-navbar/app-navbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, AppSideMenu, MatSidenavModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
