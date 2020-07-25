/**
 *   @author Siddharth Kapania <sid.kapania@dal.ca>
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '@core/model/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  _url = 'http://localhost:80/api/authenticate';
  private _isLoggedIn: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this._isLoggedIn = new BehaviorSubject<boolean>(false);
  }

  setIsLoggedIn(value: boolean): void {
    this._isLoggedIn.next(value);
  }
  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  login(user: UserModel) {
    return this.http.post<any>(this._url, user);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('access_token');
    //this.currentUserSubject.next(null);
  }
}
