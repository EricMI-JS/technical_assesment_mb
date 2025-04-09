import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { PrimeNGModule } from '../../shared/prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PrimeNGModule
  ],
  providers: [AuthService]
})
export class AuthModule { } 