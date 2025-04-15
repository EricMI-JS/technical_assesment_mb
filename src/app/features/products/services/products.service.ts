import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { ProductResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  async getProductsOnSale(): Promise<ProductResponse> {
    return firstValueFrom(this.http.get<ProductResponse>(`${this.apiUrl}/getProductosOferta/`));
  }
} 