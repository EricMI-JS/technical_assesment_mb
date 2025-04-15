import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  nextDayDelivery: boolean = false;
  freeShipping: boolean = false;
  officialStores: boolean = false;

  brands: SelectItem[] = [
    { label: 'Autolite', value: 'Autolite' },
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Champion', value: 'Champion' },
    { label: 'Denso', value: 'Denso' },
    { label: 'NGK', value: 'NGK' }
  ];
  selectedBrand: string | null = null;

  sortOptions: SelectItem[] = [
    { label: 'Menor precio', value: 'price_asc' },
    { label: 'Mayor precio', value: 'price_desc' },
    { label: 'Más recientes', value: 'newest' }
  ];
  selectedSortOption: string = 'relevance';

  products: Product[] = [
    {
      id: 'DCATO19939',
      image: 'assets/images/products/radiador.jpg',
      title: 'Radiador agricola tractor Case 580 k Aluminio/Aluminio TM',
      price: 1842,
      originalPrice: 1842,
      rating: {
        value: 4.9,
        count: 120
      },
      isFavorite: false
    },
    {
      id: 'DCATO19939',
      image: 'assets/images/products/aspas.jpg',
      title: 'Aspas para ventilador Mazda B20000, B22000',
      price: 1842,
      originalPrice: 1842,
      rating: {
        value: 4.9,
        count: 85
      },
      isFavorite: false
    },
    {
      id: 'DCATO19939',
      image: 'assets/images/products/radiador.jpg',
      title: 'Radiador agricola tractor Case 580 k Aluminio/Aluminio TM',
      price: 1842,
      originalPrice: 1842,
      rating: {
        value: 4.9,
        count: 62
      },
      isFavorite: false
    },
    {
      id: 'DCATO19939',
      image: 'assets/images/products/aspas.jpg',
      title: 'Aspas para ventilador Mazda B20000, B22000',
      price: 1842,
      originalPrice: 1842,
      rating: {
        value: 4.9,
        count: 45
      },
      isFavorite: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getFilteredProducts(): Product[] {
    let filtered = [...this.products];
    return filtered;
  }
} 