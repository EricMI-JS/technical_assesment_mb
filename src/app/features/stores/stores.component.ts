import { Component, OnInit } from '@angular/core';

interface Store {
  name: string;
  logo: string;
  backgroundColor: string;
  link: string;
}

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
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
    },
    {
      name: 'Dynamik',
      logo: 'assets/images/stores/dynamik.png',
      backgroundColor: '#E91E63',
      link: '/tiendas/dynamik'
    },
    {
      name: 'Eagle BHP',
      logo: 'assets/images/stores/eagle-bhp.png',
      backgroundColor: '#2196F3',
      link: '/tiendas/eagle-bhp'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
} 