import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent {
  @Input() subtotal: number = 0;
  @Input() shipping: number = 0;
  @Input() total: number = 0;
  @Input() itemCount: number = 0;

  constructor(private router: Router) {}

  onCheckout(): void {
    this.router.navigate(['/pago']);
  }
}
