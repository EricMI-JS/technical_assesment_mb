import { Component, OnInit } from '@angular/core';
import { ProductsFacade, Product } from '../products/facades/products.facade';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {
  productsOnSale: Product[] = [];
  lastVisitedProducts: Product[] = [];
  isLoading: boolean = true;

  constructor(
    private productsFacade: ProductsFacade,
    private messageService: MessageService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.isLoading = true;
      await this.productsFacade.loadProductsOnSale();
      this.productsOnSale = this.productsFacade.getProducts();
      
      await this.productsFacade.loadLastVisitedProducts();
      this.lastVisitedProducts = this.productsFacade.getLastVisitedProducts();
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudieron cargar los productos. Por favor, intente nuevamente.',
        life: 5000
      });
      console.error('Error loading products:', error);
    } finally {
      this.isLoading = false;
    }
  }
} 