import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';

@NgModule({
  declarations: [
    MobileMenuComponent,
    BottomMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PrimeNGModule
  ],
  exports: [
    MobileMenuComponent,
    BottomMenuComponent
  ]
})
export class SharedModule { } 