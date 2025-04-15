import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsFacade, Product } from '../../features/products/facades/products.facade';
import { SelectItem } from 'primeng/api';

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

  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsFacade: ProductsFacade
  ) { }

  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(async params => {
      const query = params['q'] || '';
      if (query) {
        await this.productsFacade.searchProducts(query);
        this.products = this.productsFacade.getSearchProducts();
        console.log(this.products);
      } else {
        this.products = [];
      }
    });
  }

  getFilteredProducts(): Product[] {
    let filtered = [...this.products];
    return filtered;
  }
} 