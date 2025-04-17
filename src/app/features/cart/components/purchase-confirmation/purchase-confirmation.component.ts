import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

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
  
  constructor(
    private router: Router,
    private dialogRef: DynamicDialogRef
  ) {}

  ngOnInit(): void {
  }
  
  continueShoppingClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }
} 