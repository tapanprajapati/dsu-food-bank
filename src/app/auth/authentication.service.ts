import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _isLoggedIn: BehaviorSubject<boolean>;

  constructor() {
    this._isLoggedIn = new BehaviorSubject<boolean>(false);
  }

  setIsLoggedIn(value: boolean): void {
    this._isLoggedIn.next(value);
  }
  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }
}
