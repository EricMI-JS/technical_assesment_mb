import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl = 'https://prueba.sandboxmb.com/api/crearVendedor/';

  constructor(private http: HttpClient) { }

  createBrand(brandData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token YOUR_TOKEN_HERE'
    });

    return this.http.post(this.apiUrl, brandData, { headers });
  }
} 