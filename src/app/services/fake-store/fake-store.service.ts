import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicio {
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getProduct(productId: string):Observable<any> {
    const url = `https://fakestoreapi.com/products/${productId}`;
    return this.http.get(url);
  }
}