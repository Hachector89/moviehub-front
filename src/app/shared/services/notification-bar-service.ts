import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarAlertComponent } from '../components/snackbar-alert/snackbar-alert-component';


@Injectable({
  providedIn: 'root'
})
export class NotificationBarService {

  constructor(
        private snackBar: MatSnackBar,
  ) { }

    showSnackbar(msg: string, type: 'success' | 'error') {
      this.snackBar.openFromComponent(SnackbarAlertComponent, {
        data: { message: msg, icon: type },
        panelClass: [`custom-snackbar-${type}`],
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 4000,
      });
    }
}
