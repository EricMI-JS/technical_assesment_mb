import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { SearchComponent } from './search.component';
import { SearchProductsGridComponent } from './components/search-products-grid/search-products-grid.component';
import { SearchProductsListComponent } from './components/search-products-list/search-products-list.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchProductsGridComponent,
    SearchProductsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: SearchComponent }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchModule { } 