import { Component, OnInit, HostListener } from '@angular/core';

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

interface OrderItem {
  id: string;
  quantity: number;
  name: string;
  price: number;
}

interface PaymentDetails {
  method: string;
  cardNumber: string;
  cardHolder: string;
}

interface ShippingDetails {
  address: string;
  city: string;
  country: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isMobile: boolean = window.innerWidth < 768;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }

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
  ];
  
  subtotal: number = 0;
  shipping: number = 0;
  total: number = 0;

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

  ngOnInit(): void {
    this.calculateTotals();
    this.prepareOrderItems();
  }

  calculateTotals(): void {
    this.subtotal = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    this.shipping = 0;
    this.total = this.subtotal + this.shipping;
  }

  updateQuantity(index: number, quantity: any): void {
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
  
  prepareOrderItems(): void {
    this.orderItems = this.cartItems.map(item => ({
      id: item.id,
      quantity: item.quantity,
      name: item.name,
      price: item.price
    }));
    
    for (let i = 1; i <= 1; i++) {
      this.orderItems.push({
        id: `extra-${i}`,
        quantity: 1,
        name: `Producto adicional ${i}`,
        price: 100 + (i * 10)
      });
    }
    
    this.subtotal = this.orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    this.total = this.subtotal + this.shipping;
  }
  
  proceedToCheckout(): void {
    console.log('Procediendo al checkout con producto:', this.selectedProduct);
    this.hideProductSummary();
    this.prepareOrderItems();
    
    // Simulamos un pago aleatorio (éxito o error)
    const isPaymentSuccessful = Math.random() > 0.5;
    
    if (isPaymentSuccessful) {
      this.showPurchaseConfirmation = true;
    } else {
      this.showPaymentError = true;
    }
  }
  
  retryPayment(): void {
    this.showPaymentError = false;
    // Simulamos un segundo intento exitoso
    this.showPurchaseConfirmation = true;
  }
  
  continueShopping(): void {
    this.showPurchaseConfirmation = false;
    // Aquí podrías navegar a la página de inicio o de búsqueda
    console.log('Continuando compras...');
  }
} 