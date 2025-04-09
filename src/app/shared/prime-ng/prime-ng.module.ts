import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule,
    DialogModule,
    ToastModule,
    CheckboxModule,
    InputSwitchModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule,
    DialogModule,
    ToastModule,
    CheckboxModule,
    InputSwitchModule
  ],
  providers: [
    MessageService
  ]
})
export class PrimeNGModule { } 