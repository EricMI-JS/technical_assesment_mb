import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { ProductResponse, LastVisitedResponse, SearchResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  async getProductsOnSale(): Promise<ProductResponse> {
    return firstValueFrom(this.http.get<ProductResponse>(`${this.apiUrl}/getProductosOferta/`));
  }

  async getLastVisitedProducts(): Promise<LastVisitedResponse> {
    return firstValueFrom(this.http.get<LastVisitedResponse>(`${this.apiUrl}/getProductosUltimaVisita/`));
  }

  async searchProducts(query: string, limit: number = 20, page: number = 1, categoriaSeleccionada: string = 'undefined', marcasSeleccionadas: string = '', vehiculo: string = ''): Promise<SearchResponse> {
    const url = `${this.apiUrl}/searchAutoparteV3/?search=${encodeURIComponent(query)}&limit=${limit}&page=${page}&categoriaSeleccionada=${categoriaSeleccionada}&marcasSeleccionadas=${marcasSeleccionadas}&vehiculo=${vehiculo}`;
    return firstValueFrom(this.http.get<SearchResponse>(url));
  }
} 