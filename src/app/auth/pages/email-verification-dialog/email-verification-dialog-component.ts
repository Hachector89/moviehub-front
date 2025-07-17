
import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

export interface DialogData {
  email: String;
}

@Component({
  selector: 'app-email-verification-dialog-component',
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './email-verification-dialog-component.html',
  styleUrl: './email-verification-dialog-component.css'
})
export class EmailVerificationDialogComponent {

  readonly dialogRef = inject(MatDialogRef<EmailVerificationDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

}
