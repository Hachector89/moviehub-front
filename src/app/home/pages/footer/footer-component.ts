import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';


@Component({
  selector: 'app-footer-component',
  imports: [TranslocoModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent {

  currentYear = new Date().getFullYear();

}
