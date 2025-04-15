import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface ProductRating {
  value: number;
  count: number;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() id: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() originalPrice?: number;
  @Input() rating: ProductRating = { value: 0, count: 0 };
  @Input() isFavorite: boolean = false;
  @Input() showCheckbox: boolean = false;
  @Input() isChecked: boolean = false;
  @Output() checkboxChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  onCheckboxChange(event: any): void {
    this.isChecked = event.target.checked;
    this.checkboxChange.emit(this.isChecked);
  }

  formatPrice(price: number): string {
    return `$ ${price.toLocaleString('es-MX')}`;
  }
} 