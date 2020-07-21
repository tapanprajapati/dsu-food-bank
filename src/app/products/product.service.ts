/**
 * @author Parth Parmar <parth.parmar@default.ca>
 *
 */

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { ProductModel } from '@core/model/product.model';
import { ApiResponseModel } from '@core/model/api-response.model';
import { GlobalErrorService } from '@app/@core/services/global-error.service';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private _httpClient: HttpClient, private _globalErrorService: GlobalErrorService) {}

  getAllProducts(): Observable<ApiResponseModel> {
    return this._httpClient
      .get<ApiResponseModel>(this._getUrl())
      .pipe(catchError(this._globalErrorService.handleHttepResponseError));
  }

  getAllCategories(): Observable<ApiResponseModel> {
    return this._httpClient
      .get<ApiResponseModel>(`${environment.serverUrl}categories/`)
      .pipe(catchError(this._globalErrorService.handleHttepResponseError));
  }

  getProductDetails(id: string): Observable<ApiResponseModel> {
    return this._httpClient
      .get<ApiResponseModel>(`${this._getUrl()}/${id}`)
      .pipe(catchError(this._globalErrorService.handleHttepResponseError));
  }

  // Check
  filterProductsByName(productName: string): Observable<ProductModel[]> {
    return this._httpClient
      .get<ProductModel[]>(`${this._getUrl()}/${productName}`)
      .pipe(catchError(this._globalErrorService.handleHttepResponseError));
  }

  // Check
  filterProductsByCategory(categories: string[]): Observable<ProductModel[]> {
    return this._httpClient
      .get<ProductModel[]>(`${this._getUrl()}`)
      .pipe(catchError(this._globalErrorService.handleHttepResponseError));
  }

  private _getUrl() {
    return `${environment.serverUrl}products/`;
  }
}

// REF: https://www.lipsum.com/
// REF: https://walmart.ca
