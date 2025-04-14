import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { CartComponent } from './cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductSummaryComponent } from './components/product-summary/product-summary.component';
import { PurchaseConfirmationComponent } from './components/purchase-confirmation/purchase-confirmation.component';
import { PaymentErrorComponent } from './components/payment-error/payment-error.component';
import { CartItemDesktopComponent } from './components/cart-item-desktop/cart-item-desktop.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartItemDesktopComponent,
    ProductSummaryComponent,
    PurchaseConfirmationComponent,
    PaymentErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CartComponent }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { } 