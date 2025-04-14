import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BrandRegistrationComponent } from './brand-registration.component';


@NgModule({
  declarations: [
    BrandRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: BrandRegistrationComponent }
    ])
  ]
})
export class BrandRegistrationModule { } 