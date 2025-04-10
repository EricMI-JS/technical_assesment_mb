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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  navigate(route: string): void {
    this.router.navigate([route]);
    this.showMenu = false;
  }

  updateCP(cp: string): void {
    this.userCP = cp;
  }
} 