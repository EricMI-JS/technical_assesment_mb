import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'tiendas',
    loadChildren: () => import('./features/stores/stores.module').then(m => m.StoresModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
