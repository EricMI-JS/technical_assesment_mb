import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { MessageService } from 'primeng/api';
import { CartItem } from '../../../core/models/cart.models';
import { Subscription } from 'rxjs';

interface ProductRating {
  value: number;
  count: number;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [MessageService]
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input() id: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() originalPrice?: number;
  @Input() rating: ProductRating = { value: 0, count: 0 };
  @Input() isFavorite: boolean = false;
  @Input() showCheckbox: boolean = false;
  @Input() isChecked: boolean = false;
  @Output() checkboxChange = new EventEmitter<boolean>();

  isInCart: boolean = false;
  private cartSubscription?: Subscription;

  constructor(
    private cartService: CartService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.isInCart = items.some(item => item.id === this.id);
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  onCheckboxChange(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.checkboxChange.emit(isChecked);
  }

  formatPrice(price: number): string {
    return `$ ${price.toLocaleString('es-MX')}`;
  }

  addToCart(): void {
    if (this.isInCart) {
      this.cartService.removeFromCart(this.id);
      this.messageService.add({
        severity: 'info',
        summary: 'Producto removido',
        detail: `Producto removido del carrito`,
        life: 3000
      });
    } else {
      const cartItem: CartItem = {
        id: this.id,
        sku: this.id,
        name: this.title,
        description: '',
        price: this.price,
        image: this.image,
        brand: '',
        brandImage: '',
        quantity: 1,
        availability: 10
      };

      this.cartService.addToCart(cartItem);
      
      this.messageService.add({
        severity: 'success',
        summary: 'Producto añadido',
        detail: `Producto añadido al carrito`,
        life: 3000
      });
    }
  }
} 