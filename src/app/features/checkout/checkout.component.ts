import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { PurchaseConfirmationComponent } from '../cart/components/purchase-confirmation/purchase-confirmation.component';
import { PaymentErrorComponent } from '../cart/components/payment-error/payment-error.component';

interface CheckoutSummary {
  subtotal: number;
  shipping: number;
  total: number;
  items: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [DialogService]
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  orderSummary: CheckoutSummary = {
    subtotal: 1000.00,
    shipping: 250.00,
    total: 1250.00,
    items: 4
  };
  
  confirmationItems = [
    { id: '1', quantity: 2, name: 'Producto 1', price: 250.00 },
    { id: '2', quantity: 1, name: 'Producto 2', price: 500.00 }
  ];
  
  paymentDetails = {
    method: 'VISA',
    cardNumber: '',
    cardHolder: ''
  };
  
  shippingDetails = {
    address: '',
    city: '',
    country: 'México'
  };
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialogService: DialogService
  ) {
    this.checkoutForm = this.fb.group({
      contact: this.fb.group({
        email: ['mail@mail.com', [Validators.required, Validators.email]],
        phone: ['1234567890', Validators.required]
      }),
      shipping: this.fb.group({
        firstName: ['Juan', Validators.required],
        lastName: ['Perez', Validators.required],
        street: ['Av. Revolución', Validators.required],
        extNumber: ['123', Validators.required],
        intNumber: ['123'],
        neighborhood: ['Centro', Validators.required],
        zipCode: ['12345', Validators.required],
        city: ['Ciudad de México', Validators.required],
        state: ['TLAX', Validators.required]
      }),
      payment: this.fb.group({
        cardHolder: ['Juan Perez', Validators.required],
        cardNumber: ['1234567890123456', [Validators.required]]
      })
    });
  }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    if (this.checkoutForm.valid) {
      const cardNumber = this.checkoutForm.get('payment.cardNumber')?.value;
      
      this.paymentDetails.cardNumber = cardNumber;
      this.paymentDetails.cardHolder = this.checkoutForm.get('payment.cardHolder')?.value;
      
      const shipping = this.checkoutForm.get('shipping');
      this.shippingDetails.address = `${shipping?.get('street')?.value} ${shipping?.get('extNumber')?.value}`;
      this.shippingDetails.city = shipping?.get('city')?.value;
      
      if (this.isValidCardNumber(cardNumber)) {
        this.openConfirmationDialog();
      } else {
        this.openErrorDialog();
      }
    } else {
      this.markFormGroupTouched(this.checkoutForm);
    }
  }
  
  private isValidCardNumber(cardNumber: string): boolean {
    const cleanNumber = cardNumber.replace(/\s+/g, '').replace(/-/g, '');
    return cleanNumber.length === 16;
  }
  
  private openConfirmationDialog(): void {
    const ref = this.dialogService.open(PurchaseConfirmationComponent, {
      data: {
        items: this.confirmationItems,
        subtotal: this.orderSummary.subtotal,
        shipping: this.orderSummary.shipping,
        total: this.orderSummary.total,
        payment: this.paymentDetails,
        shippingDetails: this.shippingDetails
      },
      header: 'Confirmación de compra',
      width: '95%',
      style: { 'max-width': '400px', 'max-height': '80vh' },
      closeOnEscape: false,
      dismissableMask: false
    });
    
    ref.onClose.subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  
  private openErrorDialog(): void {
    const ref = this.dialogService.open(PaymentErrorComponent, {
      header: 'Error de pago',
      width: '95%',
      style: { 'max-width': '400px', 'max-height': '90vh' },
      closeOnEscape: false,
      dismissableMask: false
    });
    
    ref.onClose.subscribe(() => {
    });
  }
  
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
} 