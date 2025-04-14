import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  showMenu = false;
  userCP = '42010';
  searchQuery = '';

  menuItems = [
    { label: 'Inicio', icon: 'pi pi-home', route: '/home' },
    { label: 'Categorías', icon: 'pi pi-th-large', route: '/categories' },
    { label: 'Tiendas', icon: 'pi pi-shopping-bag', route: '/stores' },
    { label: 'Mis Pedidos', icon: 'pi pi-shopping-cart', route: '/orders' },
    { label: 'Favoritos', icon: 'pi pi-heart', route: '/favorites' },
    { label: 'Mi Cuenta', icon: 'pi pi-user', route: '/account' },
    { label: 'Ayuda', icon: 'pi pi-question-circle', route: '/help' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
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
    if (this.searchQuery && this.searchQuery.trim().length > 0) {
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
  }

  updateCP(cp: string): void {
    const newCP = prompt('Ingresa tu código postal:', cp);
    if (newCP && newCP.trim() !== '') {
      this.userCP = newCP.trim();
    }
  }
} 