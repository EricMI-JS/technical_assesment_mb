import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-payment-error',
  templateUrl: './payment-error.component.html',
  styleUrls: ['./payment-error.component.scss']
})
export class PaymentErrorComponent {
  constructor(private dialogRef: DynamicDialogRef) {}

  retryPayment(): void {
    this.dialogRef.close();
  }
} 