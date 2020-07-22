import { ProductModel } from '@core/model/product.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AdminProductService {
  readonly URL = 'http://localhost:80/api/products/';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.URL);
  }

  //   getOrderDetails(orderId: number) {
  //     return this.http.get<OrderDetailModel[]>(this.URL + orderId);
  //   }
}
