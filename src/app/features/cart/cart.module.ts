import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { CartComponent } from './cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductSummaryComponent } from './components/product-summary/product-summary.component';
import { PurchaseConfirmationComponent } from './components/purchase-confirmation/purchase-confirmation.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    ProductSummaryComponent,
    PurchaseConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CartComponent }
    ])
  ]
})
export class CartModule { } 