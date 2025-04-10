import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

interface Category {
  id: number;
  image: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-categories-carousel',
  templateUrl: './categories-carousel.component.html',
  styleUrls: ['./categories-carousel.component.scss']
})
export class CategoriesCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('categoriesSwiperContainer') swiperContainer!: ElementRef;
  
  categories: Category[] = [
    {
      id: 1,
      image: 'assets/images/categories/llanta.png',
      title: 'Llantas',
      link: '/categorias/llantas'
    },
    {
      id: 2,
      image: 'assets/images/categories/frenos.png',
      title: 'Frenos',
      link: '/categorias/frenos'
    },
    {
      id: 3,
      image: 'assets/images/categories/llanta.png',
      title: 'Llantas',
      link: '/categorias/llantas'
    },
    {
      id: 4,
      image: 'assets/images/categories/frenos.png',
      title: 'Frenos',
      link: '/categorias/frenos'
    },
  ];

  constructor() {
    register();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const swiperEl = this.swiperContainer.nativeElement;
    
    const swiperParams = {
      slidesPerView: 'auto',
      spaceBetween: 2,
      freeMode: true,
      pagination: false,
      breakpoints: {
        320: {
          slidesPerView: 2.3,
          spaceBetween: 2
        },
        480: {
          slidesPerView: 3.3,
          spaceBetween: 2
        },
        768: {
          slidesPerView: 4.3,
          spaceBetween: 2
        }
      }
    };

    Object.assign(swiperEl, swiperParams);

    swiperEl.initialize();
  }
} 