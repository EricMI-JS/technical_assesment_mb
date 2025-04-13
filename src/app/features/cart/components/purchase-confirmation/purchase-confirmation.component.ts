import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

interface OrderItem {
  id: string;
  quantity: number;
  name: string;
  price: number;
}

interface PaymentDetails {
  method: string;
  cardNumber?: string;
  cardHolder?: string;
}

interface ShippingDetails {
  address: string;
  city: string;
  country: string;
}

@Component({
  selector: 'app-purchase-confirmation',
  templateUrl: './purchase-confirmation.component.html',
  styleUrls: ['./purchase-confirmation.component.scss']
})
export class PurchaseConfirmationComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() items: OrderItem[] = [];
  @Input() subtotal: number = 0;
  @Input() shipping: number = 0;
  @Input() total: number = 0;
  @Input() payment: PaymentDetails = { method: 'VISA' };
  @Input() shippingDetails: ShippingDetails = { 
    address: 'Calle Nombre de calle 111',
    city: 'Ciudad de México',
    country: 'México'
  };
  
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() continueShopping = new EventEmitter<void>();
  
  ngOnInit(): void {
  }
  
  hideModal(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  
  continueShoppingClick(): void {
    this.continueShopping.emit();
    this.hideModal();
  }
} 