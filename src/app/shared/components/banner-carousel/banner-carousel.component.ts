import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

interface Banner {
  id: number;
  mobileImageUrl: string;
  desktopImageUrl: string;
  alt: string;
  link: string;
}

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  
  banners: Banner[] = [
    {
      id: 1,
      mobileImageUrl: 'assets/images/banners/banner-mobile.png',
      desktopImageUrl: 'assets/images/banners/banner-desktop.png',
      alt: 'Descuento en llantas',
      link: '/promociones/llantas'
    },
    {
      id: 2,
      mobileImageUrl: 'assets/images/banners/banner-mobile.png',
      desktopImageUrl: 'assets/images/banners/banner-desktop.png',
      alt: 'Promoción de accesorios',
      link: '/accesorios'
    }
  ];

  constructor() {
    register();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const swiperEl = this.swiperContainer.nativeElement;
    
    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true
    };

    Object.assign(swiperEl, swiperParams);

    swiperEl.initialize();
  }
} 