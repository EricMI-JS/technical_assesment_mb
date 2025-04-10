import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {
  @Input() title: string = 'Productos';
  @Input() showViewAll: boolean = true;
  @Input() viewAllLink: string = '/productos';
  @Input() limit: number = 4;
  
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get displayProducts(): Product[] {
    return this.products.slice(0, this.limit);
  }
} 