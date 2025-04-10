import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    MobileMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNGModule
  ],
  exports: [
    MobileMenuComponent
  ]
})
export class SharedModule { } 