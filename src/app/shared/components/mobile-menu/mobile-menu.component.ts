import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit, OnDestroy {
  showMenu = false;
  userCP = '42010';
  searchQuery = '';
  cartItemCount: number = 0;
  private cartSubscription?: Subscription;

  menuItems = [
    { label: 'Ingresar', icon: 'pi pi-user', route: '/login' },
    { label: 'Inicio', icon: 'pi pi-home', route: '/inicio' },
    { label: 'Categorías', icon: 'pi pi-th-large', route: '/categorias' },
    { label: 'Tiendas', icon: 'pi pi-shopping-bag', route: '/tiendas' },
    { label: 'Carrito', icon: 'pi pi-shopping-cart', route: '/carrito' },
    { label: 'Favoritos', icon: 'pi pi-heart', route: '/favoritos' },
    { label: 'Perfil', icon: 'pi pi-user', route: '/perfil' },
  ];

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

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    
    if (this.showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  navigate(route: string): void {
    this.router.navigate([route]);
    this.showMenu = false;
    document.body.style.overflow = 'auto';
  }

  search(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/buscar'], { queryParams: { q: this.searchQuery } });
    }
  }

  updateCP(cp: string): void {
    const newCP = prompt('Ingresa tu código postal:', cp);
    if (newCP && newCP.trim() !== '') {
      this.userCP = newCP.trim();
    }
  }
} 