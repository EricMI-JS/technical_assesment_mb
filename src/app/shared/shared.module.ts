import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoriesCarouselComponent } from './components/categories-carousel/categories-carousel.component';

@NgModule({
  declarations: [
    MobileMenuComponent,
    BottomMenuComponent,
    BannerCarouselComponent,
    CategoryCardComponent,
    CategoriesCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PrimeNGModule
  ],
  exports: [
    MobileMenuComponent,
    BottomMenuComponent,
    BannerCarouselComponent,
    CategoryCardComponent,
    CategoriesCarouselComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { } 