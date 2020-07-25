import { OrderDetailModel } from './../@core/model/order.model';
import { Observable } from 'rxjs';
import { OrderModel } from '@core/model/order.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import { catchError } from 'rxjs/operators';
import { GlobalErrorService } from '@core/services/global-error.service';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private orders: OrderModel[];
  private _globalErrorService: GlobalErrorService;
  private _storage: AngularFireStorage;
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
