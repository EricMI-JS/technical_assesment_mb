import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProductsGridComponent } from '../../../../shared/components/products-grid/products-grid.component';
import { Product } from '../../../../features/products/facades/products.facade';
import { Router } from '@angular/router';
import { CartService } from '../../../../core/services/cart.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-products-list',
  templateUrl: './search-products-list.component.html',
  styleUrls: ['./search-products-list.component.scss'],
  providers: [MessageService]
})
export class SearchProductsListComponent extends ProductsGridComponent implements OnInit, OnDestroy {
  @Input() nextDayDelivery: boolean = false;
  @Input() freeShipping: boolean = false;
  @Input() officialStores: boolean = false;
  @Input() selectedBrand: string | null = null;
  @Input() override products: Product[] = [];
  @Input() filteredProducts: Product[] = [];

  cartItems: { [key: string]: boolean } = {};
  private cartSubscription?: Subscription;

  constructor(
    private router: Router,
    private cartService: CartService,
    private messageService: MessageService
  ) {
    super();
  }

  override ngOnInit(): void {
    this.showViewAll = false;
    this.limit = 13;
    this.subscribeToCart();
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  private subscribeToCart(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = {};
      items.forEach(item => {
        this.cartItems[item.id] = true;
      });
    });
  }

  override get displayProducts() {
    return this.filteredProducts.slice(0, this.limit);
  }

  onProductClick(product: Product): void {
    this.router.navigate(['/producto', product.id]);
  }

  isInCart(productId: string): boolean {
    return this.cartItems[productId] || false;
  }

  addToCart(event: Event, product: Product): void {
    event.stopPropagation();
    if (this.isInCart(product.id)) {
      this.cartService.removeFromCart(product.id);
      this.messageService.add({
        severity: 'info',
        summary: 'Producto eliminado',
        detail: 'El producto se eliminó del carrito'
      });
    } else {
      this.cartService.addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
        sku: product.id,
        description: '',
        brand: '',
        brandImage: 'assets/images/brands/arnott.png',
        availability: 100
      });
      this.messageService.add({
        severity: 'success',
        summary: 'Producto agregado',
        detail: 'El producto se agregó al carrito'
      });
    }
  }
} 