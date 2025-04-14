import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

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
export class DesktopHeaderComponent implements OnInit {
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


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/buscar'], { queryParams: { q: this.searchQuery } });
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