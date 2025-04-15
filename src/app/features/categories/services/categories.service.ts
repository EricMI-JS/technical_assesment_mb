import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryResponse } from '../models/category.model';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  async getSubcategories(): Promise<CategoryResponse> {
    return firstValueFrom(this.http.get<CategoryResponse>(`${this.apiUrl}/getSubsubcategorias/`));
  }
} 