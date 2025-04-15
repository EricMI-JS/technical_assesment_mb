import { Component, OnInit } from '@angular/core';
import { ProductsFacade, Product } from '../products/facades/products.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsOnSale: Product[] = [];
  lastVisitedProducts: Product[] = [];

  constructor(private productsFacade: ProductsFacade) { }

  async ngOnInit(): Promise<void> {
    await this.productsFacade.loadProductsOnSale();
    this.productsOnSale = this.productsFacade.getProducts();
    
    await this.productsFacade.loadLastVisitedProducts();
    this.lastVisitedProducts = this.productsFacade.getLastVisitedProducts();
  }
} 