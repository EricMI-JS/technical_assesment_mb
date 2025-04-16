import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsFacade, Product } from '../../features/products/facades/products.facade';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [MessageService]
})
export class SearchComponent implements OnInit {
  viewMode: 'grid' | 'list' = 'grid';
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
    { label: 'Mayor precio', value: 'price_desc' }
  ];
  selectedSortOption: string = 'price_asc';

  products: Product[] = [];
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productsFacade: ProductsFacade,
    private messageService: MessageService
  ) { }

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.route.queryParams.subscribe(async params => {
      try {
        const query = params['q'] || '';
        if (query) {
          await this.productsFacade.searchProducts(query);
          this.products = this.productsFacade.getSearchProducts();
        } else {
          this.products = [];
        }
      } catch (error) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudieron cargar los resultados de búsqueda. Por favor, intente nuevamente.',
          life: 5000
        });
        console.error('Error searching products:', error);
        this.products = [];
      } finally {
        this.isLoading = false;
      }
    });
  }

  getFilteredProducts(): Product[] {
    let filtered = [...this.products];
    
    if (this.selectedSortOption === 'price_asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.selectedSortOption === 'price_desc') {
      filtered.sort((a, b) => b.price - a.price);
    }
    
    return filtered;
  }
} 