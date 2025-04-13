import { Component, Input, OnInit } from '@angular/core';
import { ProductsGridComponent } from '../../../../shared/components/products-grid/products-grid.component';

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

  override ngOnInit(): void {
    this.showViewAll = false;
    this.limit = 8;
  }

  override get displayProducts() {
    let filtered = [...this.products];
    
    if (this.selectedBrand) {
      console.log(`Filtrando por marca: ${this.selectedBrand}`);
    }
    
    if (this.nextDayDelivery) {
      console.log('Filtrando por entrega al día siguiente');
    }
    
    if (this.freeShipping) {
      console.log('Filtrando por envío gratis');
    }
    
    if (this.officialStores) {
      console.log('Filtrando por tiendas oficiales');
    }
    
    return filtered.slice(0, this.limit);
  }
} 