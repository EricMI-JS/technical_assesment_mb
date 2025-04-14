import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface CheckoutSummary {
  subtotal: number;
  shipping: number;
  total: number;
  items: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  orderSummary: CheckoutSummary = {
    subtotal: 1000.00,
    shipping: 250.00,
    total: 1250.00,
    items: 4
  };
  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      contact: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required]
      }),
      shipping: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        street: ['', Validators.required],
        extNumber: ['', Validators.required],
        intNumber: [''],
        neighborhood: ['', Validators.required],
        zipCode: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required]
      }),
      payment: this.fb.group({
        cardHolder: ['', Validators.required],
        cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]]
      })
    });
  }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    if (this.checkoutForm.valid) {
      console.log('Formulario enviado:', this.checkoutForm.value);
      // Aquí iría la lógica para procesar el pago
      this.router.navigate(['/pago/confirmacion']);
    } else {
      this.markFormGroupTouched(this.checkoutForm);
    }
  }
  
  // Método para marcar todos los campos como 'touched' para mostrar validaciones
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
} 