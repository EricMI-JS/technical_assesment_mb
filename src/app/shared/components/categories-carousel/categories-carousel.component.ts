import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CategoriesFacade } from 'src/app/features/categories/facades/categories.facade';
import { Category } from 'src/app/features/categories/models/category.model';

@Component({
  selector: 'app-categories-carousel',
  templateUrl: './categories-carousel.component.html',
  styleUrls: ['./categories-carousel.component.scss']
})
export class CategoriesCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('categoriesSwiperContainer') swiperContainer!: ElementRef;
  
  categories: Category[] = [];

  constructor(
    private categoriesFacade: CategoriesFacade
  ) {
    register();
  }

  async ngOnInit(): Promise<void> {
    await this.categoriesFacade.loadCategories();
    this.categories = this.categoriesFacade.getCategories();
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