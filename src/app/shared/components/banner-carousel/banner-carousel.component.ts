import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

interface Banner {
  id: number;
  imageUrl: string;
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
      imageUrl: 'assets/images/banners/banner-mobile.png',
      alt: 'Descuento en llantas',
      link: '/promociones/llantas'
    },
    {
      id: 2,
      imageUrl: 'assets/images/banners/banner-mobile.png',
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
      pagination: {
        clickable: true,
      },
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