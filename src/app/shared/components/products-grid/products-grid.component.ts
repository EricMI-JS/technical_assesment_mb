import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from 'src/app/features/products/facades/products.facade';

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
  @Input() itemsPerRow: number = 4;
  @Input() products: Product[] = [];

  @HostBinding('attr.items-per-row')
  get itemsPerRowAttr(): string {
    return this.itemsPerRow.toString();
  }

  constructor() { }

  ngOnInit(): void {
  }

  get displayProducts(): Product[] {
    return this.products.slice(0, this.limit);
  }
} 