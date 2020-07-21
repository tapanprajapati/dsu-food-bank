import { OrderDetailModel } from './../@core/model/order.model';
import { Observable } from 'rxjs';
import { OrderModel } from '@core/model/order.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private orders: OrderModel[];
  readonly URL = 'http://localhost:80/api/orders/';
  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<OrderModel[]> {
    console.log(this.http.get<OrderModel[]>(this.URL));
    return this.http.get<OrderModel[]>(this.URL);
  }

  getOrderDetails(orderId: number) {
    return this.http.get<OrderDetailModel[]>(this.URL + orderId);
  }
}
