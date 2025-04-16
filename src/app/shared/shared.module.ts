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
import { ProductCardComponent } from './components/product-card/product-card.component';
import { OffersCarouselComponent } from './components/offers-carousel/offers-carousel.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { StoreCardComponent } from './components/store-card/store-card.component';
import { OfficialStoresComponent } from './components/official-stores/official-stores.component';
import { DesktopFooterComponent } from './components/desktop-footer/desktop-footer.component';
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    MobileMenuComponent,
    BottomMenuComponent,
    BannerCarouselComponent,
    CategoryCardComponent,
    CategoriesCarouselComponent,
    ProductCardComponent,
    OffersCarouselComponent,
    ProductsGridComponent,
    StoreCardComponent,
    OfficialStoresComponent,
    DesktopFooterComponent,
    DesktopHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PrimeNGModule,
    ToastModule
  ],
  exports: [
    MobileMenuComponent,
    BottomMenuComponent,
    BannerCarouselComponent,
    CategoryCardComponent,
    CategoriesCarouselComponent,
    ProductCardComponent,
    OffersCarouselComponent,
    ProductsGridComponent,
    StoreCardComponent,
    OfficialStoresComponent,
    DesktopFooterComponent,
    DesktopHeaderComponent,
    PrimeNGModule,
    ToastModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { } 