import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { CartComponent } from './cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductSummaryComponent } from './components/product-summary/product-summary.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    ProductSummaryComponent
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