import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-error',
  templateUrl: './payment-error.component.html',
  styleUrls: ['./payment-error.component.scss']
})
export class PaymentErrorComponent {
  @Input() visible: boolean = false;
  
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() retry = new EventEmitter<void>();
  
  hideModal(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  
  retryPayment(): void {
    this.retry.emit();
  }
} 