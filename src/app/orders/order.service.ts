/**
 * @author Malav Jani <ml805403@dal.ca>
 *
 */
import { environment } from '@env/environment';
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
  constructor(private http: HttpClient) {}

  private _getUrl() {
    return `${environment.serverUrl}orders/`;
  }
  getAllOrders(): Observable<OrderModel[]> {
    console.log(this.http.get<OrderModel[]>(this._getUrl()));
    return this.http.get<OrderModel[]>(this._getUrl());
  }

  getOrderDetails(orderId: number) {
    return this.http.get<OrderDetailModel[]>(this._getUrl() + orderId);
  }
}
