import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICreateProduct, IProduct } from '../../interfaces/Product';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private url: string = environment.ENDPOINTS.API_URL;

  public loadProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/products`);
  }

  public getProducts(term: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/products/search/${term}`);
  }

  public createProduct(product: ICreateProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.url}/products/create`, product);
  }
}
