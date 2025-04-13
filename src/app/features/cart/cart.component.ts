import { Component, OnInit } from '@angular/core';

interface CartItem {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  image: string;
  brand: string;
  brandImage: string;
  quantity: number;
  availability: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [
    {
      id: '1',
      sku: '1104850',
      name: 'Amortiguador delantero',
      description: 'Para tu Ford Figo 2022',
      price: 360.00,
      image: 'assets/images/products/amortiguador.png',
      brand: 'Arnott',
      brandImage: 'assets/images/brands/arnott.png',
      quantity: 2,
      availability: 10
    },
    {
      id: '2',
      sku: '1104872',
      name: 'Amortiguador delantero',
      description: 'Compatible con Honda Civic 2020-2022',
      price: 1250.00,
      image: 'assets/images/products/amortiguador.png',
      brand: 'LUK',
      brandImage: 'assets/images/brands/arnott.png',
      quantity: 1,
      availability: 5
    }
  ];
  
  subtotal: number = 0;
  shipping: number = 0;
  total: number = 0;

  selectedProduct: CartItem | null = null;
  isProductSummaryVisible: boolean = false;

  ngOnInit(): void {
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.subtotal = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    this.shipping = 0;
    this.total = this.subtotal + this.shipping;
  }

  updateQuantity(index: number, quantity: number): void {
    this.cartItems[index].quantity = quantity;
    this.calculateTotals();
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.calculateTotals();
  }

  showProductSummary(product: CartItem): void {
    this.selectedProduct = product;
    this.isProductSummaryVisible = true;
  }
  
  hideProductSummary(): void {
    this.isProductSummaryVisible = false;
  }
  
  proceedToCheckout(): void {
    console.log('Procediendo al checkout con producto:', this.selectedProduct);
    this.hideProductSummary();
  }
} 