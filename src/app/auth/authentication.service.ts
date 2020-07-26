/**
 *   @author Siddharth Kapania <sid.kapania@dal.ca>
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserModel } from '@core/model/user.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _isLoggedIn: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this._isLoggedIn = new BehaviorSubject<boolean>(false);
  }

  login(user: UserModel) {
    return this.http.post<any>(this._getUrl(), user);
  }

  logout() {
    this.clearLocalStorage();
    this.setIsLoggedIn(false);

    // redirect to login
  }

  setIsLoggedIn(value: boolean): void {
    this._isLoggedIn.next(value);
  }

  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  set authToken(token: string) {
    localStorage.setItem('access_key', token);
  }

  get authToken() {
    return localStorage.getItem('access_key');
  }

  set authUserRole(roleId: number) {
    localStorage.setItem('role_id', String(roleId));
  }

  get authUserRole() {
    return Number(localStorage.getItem('role_id'));
  }

  set authUserBannerId(bannerId: string) {
    localStorage.setItem('banner_id', bannerId);
  }

  get authUserBannerId() {
    return localStorage.getItem('banner_id');
  }

  getAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.authToken}`,
    });
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  private _getUrl() {
    return `${environment.serverUrl}authenticate/`;
  }
}
