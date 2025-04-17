import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { CartService } from '../../../core/services/cart.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/features/auth/services/auth.service';

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
  isAuthenticated = false;
  userEmail: string | null = null;

  constructor(
    private router: Router,
    private cartService: CartService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
    });

    this.authService.user$.subscribe(user => {
      this.isAuthenticated = !!user;
      this.userEmail = user?.email || null;
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
    if (this.isAuthenticated) {
      this.router.navigate(['/perfil']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  
  goToNotifications(): void {
    this.router.navigate(['/notificaciones']);
  }
  
  goToHome(): void {
    this.router.navigate(['/inicio']);
  }

  logout(): void {
    this.authService.logout();
  }
} 