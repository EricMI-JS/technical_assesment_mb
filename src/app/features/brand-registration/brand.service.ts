import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl = environment.apiUrl + '/crearVendedor/';

  constructor(private http: HttpClient) { }

  createBrand(brandData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token YOUR_TOKEN_HERE'
    });

    return this.http.post(this.apiUrl, brandData, { headers });
  }
} 