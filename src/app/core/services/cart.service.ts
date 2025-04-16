import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly CART_COOKIE_NAME = 'shopping_cart';
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private cookieService: CookieService) {
    this.loadCartFromCookies();
  }

  private loadCartFromCookies(): void {
    const cartData = this.cookieService.get(this.CART_COOKIE_NAME);
    if (cartData) {
      try {
        const items = JSON.parse(cartData);
        this.cartItemsSubject.next(items);
      } catch (error) {
        console.error('Error al cargar el carrito desde cookies:', error);
        this.cartItemsSubject.next([]);
      }
    }
  }

  private saveCartToCookies(items: CartItem[]): void {
    this.cookieService.set(this.CART_COOKIE_NAME, JSON.stringify(items), 7); // Expira en 7 días
  }

  addToCart(item: CartItem): void {
    const currentItems = this.cartItemsSubject.value;
    const existingItemIndex = currentItems.findIndex(i => i.id === item.id);

    if (existingItemIndex >= 0) {
      currentItems[existingItemIndex].quantity += item.quantity;
    } else {
      currentItems.push(item);
    }

    this.cartItemsSubject.next([...currentItems]);
    this.saveCartToCookies(currentItems);
  }

  updateQuantity(itemId: string, quantity: number): void {
    const currentItems = this.cartItemsSubject.value;
    const itemIndex = currentItems.findIndex(item => item.id === itemId);

    if (itemIndex >= 0) {
      currentItems[itemIndex].quantity = quantity;
      this.cartItemsSubject.next([...currentItems]);
      this.saveCartToCookies(currentItems);
    }
  }

  removeFromCart(itemId: string): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(item => item.id !== itemId);
    this.cartItemsSubject.next(updatedItems);
    this.saveCartToCookies(updatedItems);
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
    this.cookieService.delete(this.CART_COOKIE_NAME);
  }

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  getCartTotal(): number {
    return this.cartItemsSubject.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount(): number {
    return this.cartItemsSubject.value.reduce((count, item) => count + item.quantity, 0);
  }
} 