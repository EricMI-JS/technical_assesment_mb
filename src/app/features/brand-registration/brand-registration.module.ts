import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { BrandRegistrationComponent } from './brand-registration.component';
import { BrandService } from './brand.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    BrandRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RouterModule.forChild([
      { path: '', component: BrandRegistrationComponent }
    ])
  ],
  providers: [BrandService]
})
export class BrandRegistrationModule { } 