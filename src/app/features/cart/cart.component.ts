import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Product, OrderItem, PaymentDetails, ShippingDetails } from './models/cart.models';
import { CartItem } from 'src/app/core/models/cart.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isMobile: boolean = window.innerWidth < 768;
  cartItems: CartItem[] = [];
  subtotal: number = 0;
  shipping: number = 0;
  total: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  frequentlyBoughtItems: Product[] = [
    {
      id: 'DCATO19939',
      image: 'assets/images/products/product-1.png',
      title: 'Radiador agrícola tractor Case 580 k Aluminio/Aluminio TM',
      price: 1842,
      originalPrice: 1842,
      rating: {
        value: 4.9,
        count: 120
      },
      isFavorite: false
    },
    {
      id: 'DCATO19940',
      image: 'assets/images/products/product-2.png',
      title: 'Llanta Michelin Energy LTX 245/70R16 111T',
      price: 2950,
      originalPrice: 3450,
      rating: {
        value: 4.8,
        count: 85
      },
      isFavorite: false
    },
    {
      id: 'DCATO19941',
      image: 'assets/images/products/product-3.png',
      title: 'Batería Motorcraft BM-51R 500CCA',
      price: 1599,
      originalPrice: 1899,
      rating: {
        value: 4.7,
        count: 62
      },
      isFavorite: false
    }
  ];

  selectedFrequentItems: Set<string> = new Set();
  frequentItemsTotal: number = 0;
  selectedProduct: CartItem | null = null;
  isProductSummaryVisible: boolean = false;
  showPurchaseConfirmation: boolean = false;
  showPaymentError: boolean = false;
  orderItems: OrderItem[] = [];
  paymentDetails: PaymentDetails = {
    method: 'VISA',
    cardNumber: '4111',
    cardHolder: 'NOMBRE USUARIO'
  };
  shippingDetails: ShippingDetails = {
    address: 'Calle Nombre de calle 111',
    city: 'Ciudad de México',
    country: 'México'
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotals();
      this.prepareOrderItems();
    });
  }

  calculateTotals(): void {
    this.subtotal = this.cartService.getCartTotal();
    this.shipping = 0;
    this.total = this.subtotal + this.shipping;
  }

  updateQuantity(index: number, quantity: number): void {
    const item = this.cartItems[index];
    this.cartService.updateQuantity(item.id, quantity);
  }

  removeItem(index: number): void {
    const item = this.cartItems[index];
    this.cartService.removeFromCart(item.id);
  }

  showProductSummary(product: CartItem): void {
    this.selectedProduct = product;
    this.isProductSummaryVisible = true;
  }

  hideProductSummary(): void {
    this.selectedProduct = null;
    this.isProductSummaryVisible = false;
  }

  proceedToCheckout(): void {
    this.showPurchaseConfirmation = true;
  }

  continueShopping(): void {
    this.showPurchaseConfirmation = false;
  }

  retryPayment(): void {
    this.showPaymentError = false;
    this.proceedToCheckout();
  }

  prepareOrderItems(): void {
    this.orderItems = this.cartItems.map(item => ({
      id: item.id,
      quantity: item.quantity,
      name: item.name,
      price: item.price
    }));
  }

  onFrequentItemSelect(itemId: string, isChecked: boolean): void {
    if (isChecked) {
      this.selectedFrequentItems.add(itemId);
    } else {
      this.selectedFrequentItems.delete(itemId);
    }
    this.calculateFrequentItemsTotal();
  }

  calculateFrequentItemsTotal(): void {
    this.frequentItemsTotal = this.frequentlyBoughtItems
      .filter(product => this.selectedFrequentItems.has(product.id))
      .reduce((total, product) => total + product.price, 0);
  }

  addFrequentItemsToCart(): void {
    const itemsToAdd = this.frequentlyBoughtItems
      .filter(product => this.selectedFrequentItems.has(product.id))
      .map(product => ({
        id: product.id,
        sku: product.id,
        name: product.title,
        description: '',
        price: product.price,
        image: product.image,
        brand: '',
        brandImage: '',
        quantity: 1,
        availability: 10
      }));
    
    itemsToAdd.forEach(item => this.cartService.addToCart(item));
    this.selectedFrequentItems.clear();
  }
} 