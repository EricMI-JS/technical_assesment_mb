import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  active: boolean;
}

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    { label: 'Inicio', icon: 'assets/icons/home.svg', route: '/inicio', active: false },
    { label: 'Tiendas', icon: 'assets/icons/shop.svg', route: '/tiendas', active: false },
    { label: 'Favoritos', icon: 'assets/icons/favorite.svg', route: '/favoritos', active: false },
    { label: 'Perfil', icon: 'assets/icons/profile.svg', route: '/perfil', active: false }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
} 