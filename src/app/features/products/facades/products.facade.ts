import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { ProductContent, LastVisitedContent, SearchResult } from '../models/product.model';

export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  rating: {
    value: number;
    count: number;
  };
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  private lastVisitedProductsSubject = new BehaviorSubject<Product[]>([]);
  lastVisitedProducts$ = this.lastVisitedProductsSubject.asObservable();

  private searchProductsSubject = new BehaviorSubject<Product[]>([]);
  searchProducts$ = this.searchProductsSubject.asObservable();
  
  private defaultImages = [
    'assets/images/products/product-1.png',
    'assets/images/products/product-2.png',
    'assets/images/products/product-3.png',
    'assets/images/products/product-4.png',
    'assets/images/products/product-5.png'
  ];

  constructor(private productsService: ProductsService) {}

  private getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.defaultImages.length);
    return this.defaultImages[randomIndex];
  }

  private transformProduct(product: ProductContent): Product {
    const randomPrice = Math.floor(Math.random() * 2000) + 500;
    const discount = Math.floor(Math.random() * 20) + 10;
    const originalPrice = Math.floor(randomPrice * (1 + discount / 100));    

    return {
      id: product.unique_id,
      image: product.imagen != null ? product.imagen : this.getRandomImage(),
      title: product.nombre,
      price: randomPrice,
      originalPrice: originalPrice,
      rating: {
        value: Number((4 + Math.random()).toFixed(1)),
        count: Math.floor(Math.random() * 200) + 20
      },
      isFavorite: false
    };
  }

  private transformLastVisitedProduct(product: LastVisitedContent): Product {
    return {
      id: product.unique_id,
      image: product.imagen != null ? product.imagen : this.getRandomImage(),
      title: product.nombre,
      price: product.precio,
      originalPrice: product.precio,
      rating: {
        value: Number((4 + Math.random()).toFixed(1)),
        count: Math.floor(Math.random() * 200) + 20
      },
      isFavorite: false
    };
  }

  private transformSearchResult(result: SearchResult): Product {
    return {
      id: result.unique_id,
      image: result.has_image ? result.imagen : this.getRandomImage(),
      title: result.titulo || result.nombre,
      price: result.precio ?? 0,
      originalPrice: result.precio ?? 0,
      rating: {
        value: Number((4 + Math.random()).toFixed(1)),
        count: Math.floor(Math.random() * 200) + 20
      },
      isFavorite: false
    };
  }

  async loadProductsOnSale(): Promise<void> {
    try {
      const response = await this.productsService.getProductsOnSale();
      if (response.success === 1) {
        const transformedProducts = response.content.map(product => this.transformProduct(product));
        this.productsSubject.next(transformedProducts);
      }
    } catch (error) {
      console.error('Error loading products on sale:', error);
    }
  }

  async loadLastVisitedProducts(): Promise<void> {
    try {
      const response = await this.productsService.getLastVisitedProducts();
      if (response.success === 1) {
        const transformedProducts = response.content.map(product => this.transformLastVisitedProduct(product));
        this.lastVisitedProductsSubject.next(transformedProducts);
      }
    } catch (error) {
      console.error('Error loading last visited products:', error);
    }
  }

  async searchProducts(query: string, limit: number = 20, page: number = 1, categoriaSeleccionada: string = 'undefined', marcasSeleccionadas: string = '', vehiculo: string = ''): Promise<void> {
    try {
      const response = await this.productsService.searchProducts(query, limit, page, categoriaSeleccionada, marcasSeleccionadas, vehiculo);
      if (response.results) {
        const transformedProducts = response.results.map(result => this.transformSearchResult(result));
        this.searchProductsSubject.next(transformedProducts);
      }
    } catch (error) {
      console.error('Error searching products:', error);
    }
  }

  getProducts(): Product[] {
    return this.productsSubject.value;
  }

  getLastVisitedProducts(): Product[] {
    return this.lastVisitedProductsSubject.value;
  }

  getSearchProducts(): Product[] {
    return this.searchProductsSubject.value;
  }
} 