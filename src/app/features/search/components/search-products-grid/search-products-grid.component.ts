import { Component, Input, OnInit } from '@angular/core';
import { ProductsGridComponent } from '../../../../shared/components/products-grid/products-grid.component';
import { Product } from '../../../../features/products/facades/products.facade';

@Component({
  selector: 'app-search-products-grid',
  templateUrl: '../../../../shared/components/products-grid/products-grid.component.html',
  styleUrls: ['../../../../shared/components/products-grid/products-grid.component.scss']
})
export class SearchProductsGridComponent extends ProductsGridComponent implements OnInit {
  @Input() nextDayDelivery: boolean = false;
  @Input() freeShipping: boolean = false;
  @Input() officialStores: boolean = false;
  @Input() selectedBrand: string | null = null;
  @Input() override products: Product[] = [];
  @Input() filteredProducts: Product[] = [];

  override ngOnInit(): void {
    this.showViewAll = false;
    this.limit = 13;
  }

  override get displayProducts() {
    return this.filteredProducts.slice(0, this.limit);
  }
} 