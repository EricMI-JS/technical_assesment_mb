import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product: any;
  @Input() quantity: number = 1;
  @Output() quantityChange = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<void>();
  @Output() productClick = new EventEmitter<void>();

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  increaseQuantity(): void {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  remove(): void {
    this.removeItem.emit();
  }
  
  onProductClick(): void {
    this.productClick.emit();
  }
} 