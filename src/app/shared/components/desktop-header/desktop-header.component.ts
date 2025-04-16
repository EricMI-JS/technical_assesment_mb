import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { CartService } from '../../../core/services/cart.service';
import { Subscription } from 'rxjs';

interface CarInfo {
  brand: string;
  model: string;
  year: string;
  image: string;
}

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  selectedCar: CarInfo = {
    brand: 'Ford',
    model: 'Figo',
    year: '2022',
    image: 'assets/images/brands/ford.png'
  };

  categories: SelectItem[] = [
    { label: 'Autolite', value: 'Autolite' },
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Champion', value: 'Champion' },
    { label: 'Denso', value: 'Denso' },
    { label: 'NGK', value: 'NGK' }
  ];

  cartItemCount: number = 0;
  private cartSubscription?: Subscription;

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  search(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/buscar'], { queryParams: { q: this.searchQuery } });
    }
  }

  searchByCategory(event: any): void {
    if (event.value) {
      this.router.navigate(['/buscar'], { queryParams: { q: event.value.value } });
    }
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
  
  goToCart(): void {
    this.router.navigate(['/carrito']);
  }
  
  goToProfile(): void {
    this.router.navigate(['/perfil']);
  }
  
  goToNotifications(): void {
    this.router.navigate(['/notificaciones']);
  }
  
  goToHome(): void {
    this.router.navigate(['/inicio']);
  }
} 