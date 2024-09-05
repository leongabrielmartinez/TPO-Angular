import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../types/types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
  private url = 'https://6695cd1b0312447373c015c8.mockapi.io/products/';
  http: HttpClient = inject(HttpClient);
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }
  getOne(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(this.url + id);
  }
}
