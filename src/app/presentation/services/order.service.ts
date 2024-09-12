import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateOrders, IOrderDetail, IOrders } from '../../interfaces/Orders';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);
  private url: string = environment.ENDPOINTS.API_URL;

  public loadOrders(): Observable<IOrders[]> {
    return this.http.get<IOrders[]>(`${this.url}/orders`);
  }

  public loadOrderDetail(id: string): Observable<IOrders> {
    return this.http.get<IOrderDetail>(`${this.url}/orders/${id}/details`);
  }

  public createOrder(order: ICreateOrders): Observable<ICreateOrders> {
    return this.http.post<ICreateOrders>(`${this.url}/orders/create`, order);
  }

  public cancelOrder(id: string): Observable<IOrders> {
    return this.http.post<IOrders>(`${this.url}/orders/${id}/cancel`, {});
  }
}
