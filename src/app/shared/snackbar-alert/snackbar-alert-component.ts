import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-snackbar-alert-component',
  imports: [MatIconModule],
  templateUrl: './snackbar-alert-component.html',
  styleUrl: './snackbar-alert-component.css'
})
export class SnackbarAlertComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { message: string, icon: 'success' | 'error' }) { }

    get iconName(): string {
    const iconMap = {
      success: 'check_circle',
      error: 'error'
    };
    return iconMap[this.data.icon] || 'info';
  }

}
