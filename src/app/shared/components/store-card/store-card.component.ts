import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() logo: string = '';
  @Input() backgroundColor: string = '#ffffff';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }
} 