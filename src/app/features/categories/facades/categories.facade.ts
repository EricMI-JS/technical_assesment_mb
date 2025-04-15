import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesFacade {
  private categoriesSubject = new BehaviorSubject<Category[]>([]);
  categories$ = this.categoriesSubject.asObservable();
  private defaultImages = [
    'assets/images/categories/frenos.png',
    'assets/images/categories/llanta.png'
  ];

  constructor(private categoriesService: CategoriesService) {}

  private getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.defaultImages.length);
    return this.defaultImages[randomIndex];
  }

  private processCategories(categories: Category[]): Category[] {
    return categories.map(category => ({
      ...category,
      imagen: category.imagen || this.getRandomImage()
    }));
  }

  async loadCategories(): Promise<void> {
    try {
      const response = await this.categoriesService.getSubcategories();
      if (response.success === 1) {
        const processedCategories = this.processCategories(response.content);
        this.categoriesSubject.next(processedCategories);
      }
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  }

  getCategories(): Category[] {
    return this.categoriesSubject.value;
  }
} 