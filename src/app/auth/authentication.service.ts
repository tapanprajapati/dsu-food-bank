import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

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

  getAuthorizationHeader(): HttpHeaders {
    // Todo: User LocalStorage token instead of hard-coded values
    return new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYW5uZXJJZCI6IkIwMDg1MzkxMyIsInJvbGVJZCI6MywiaWF0IjoxNTk1NjIwMzQzLCJleHAiOjE1OTU2MjM5NDN9.o2O-Ht5D-mEkwAeyGmoxpckCXlYrQspF3WCSvf7100s',
    });
  }
}
