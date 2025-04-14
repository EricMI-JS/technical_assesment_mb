import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from '../../shared/prime-ng/prime-ng.module';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent
  }
];

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule
  ]
})
export class CheckoutModule { } 