import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent {
  @Input() product: any;
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() checkout = new EventEmitter<void>();
  
  rating: number = 4.9;
  shippingCost: number = 100;
  
  closeModal(): void {
    this.close.emit();
  }
  
  proceedToCheckout(): void {
    this.checkout.emit();
  }
  
  get totalPrice(): number {
    return this.product ? this.product.price + this.shippingCost : 0;
  }
} 