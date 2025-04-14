import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { StoresComponent } from './stores.component';

@NgModule({
  declarations: [
    StoresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: StoresComponent }
    ])
  ]
})
export class StoresModule { } 