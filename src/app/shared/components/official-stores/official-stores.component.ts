import { Component, OnInit } from '@angular/core';

interface Store {
  name: string;
  logo: string;
  backgroundColor: string;
  link: string;
}

@Component({
  selector: 'app-official-stores',
  templateUrl: './official-stores.component.html',
  styleUrls: ['./official-stores.component.scss']
})
export class OfficialStoresComponent implements OnInit {
  stores: Store[] = [
    {
      name: 'Trackone',
      logo: 'assets/images/stores/trackone.png',
      backgroundColor: '#FFC107',
      link: '/tiendas/trackone'
    },
    {
      name: 'Radec',
      logo: 'assets/images/stores/radec.png',
      backgroundColor: '#101744',
      link: '/tiendas/radec'
    },
    {
      name: 'TotalParts',
      logo: 'assets/images/stores/totalparts.png',
      backgroundColor: '#4A6C1E',
      link: '/tiendas/totalparts'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
} 