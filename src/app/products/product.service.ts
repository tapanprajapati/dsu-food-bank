/**
 * @author Parth Parmar <parth.parmar@default.ca>
 *
 */

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { ProductModel } from '@core/model/product.model';
import { CategoryModel } from '@core/model/category.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  getAllProducts(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(this._getUrl());
  }

  getAllCategories(): Observable<CategoryModel[]> {
    return this._httpClient.get<CategoryModel[]>(this._getUrl());
  }

  getProductDetails(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>(`${this._getUrl()}/${id}`);
  }

  // Check
  filterProductsByName(productName: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`${this._getUrl()}/${productName}`);
  }

  // Check
  filterProductsByCategory(categories: string[]): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`${this._getUrl()}`);
  }

  private _getUrl() {
    return `${environment.serverUrl}products/`;
  }
}

// REF: https://www.lipsum.com/
// REF: https://walmart.ca
