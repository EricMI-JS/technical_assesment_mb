import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: {
    value: number;
    count: number;
  };
  isFavorite: boolean;
}

@Component({
  selector: 'app-offers-carousel',
  templateUrl: './offers-carousel.component.html',
  styleUrls: ['./offers-carousel.component.scss']
})
export class OffersCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('offersSwiperContainer') swiperContainer!: ElementRef;
  
  products: Product[] = [
    {
      id: 'DCATO19939',
      image: 'assets/images/products/product-1.png',
      title: 'Radiador agrícola tractor Case 580 k Aluminio/Aluminio TM',
      price: 1842,
      originalPrice: 1842,
      rating: {
        value: 4.9,
        count: 120
      },
      isFavorite: false
    },
    {
      id: 'DCATO19940',
      image: 'assets/images/products/product-2.png',
      title: 'Llanta Michelin Energy LTX 245/70R16 111T',
      price: 2950,
      originalPrice: 3450,
      rating: {
        value: 4.8,
        count: 85
      },
      isFavorite: true
    },
    {
      id: 'DCATO19941',
      image: 'assets/images/products/product-3.png',
      title: 'Batería Motorcraft BM-51R 500CCA',
      price: 1599,
      originalPrice: 1899,
      rating: {
        value: 4.7,
        count: 62
      },
      isFavorite: false
    },
    {
      id: 'DCATO19942',
      image: 'assets/images/products/product-4.png',
      title: 'Filtro de aceite Mann HU 816 X',
      price: 325,
      originalPrice: 400,
      rating: {
        value: 4.5,
        count: 45
      },
      isFavorite: false
    },
    {
      id: 'DCATO19943',
      image: 'assets/images/products/product-5.png',
      title: 'Kit de frenos Brembo delanteros para Ford F-150',
      price: 2199,
      originalPrice: 2499,
      rating: {
        value: 4.9,
        count: 73
      },
      isFavorite: false
    }
  ];

  constructor() {
    register();
  }

  ngOnInit(): void {
    console.log(this.products);
    
  }

  ngAfterViewInit(): void {
    const swiperEl = this.swiperContainer.nativeElement;
    
    const swiperParams = {
      slidesPerView: 'auto',
      spaceBetween: 12,
      freeMode: true,
      pagination: false,
      breakpoints: {
        320: {
          slidesPerView: 2.2,
          spaceBetween: 8
        },
        480: {
          slidesPerView: 2.8,
          spaceBetween: 12
        },
        768: {
          slidesPerView: 4.2,
          spaceBetween: 16
        }
      }
    };

    Object.assign(swiperEl, swiperParams);

    swiperEl.initialize();
  }
} 