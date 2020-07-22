import { Injectable, OnDestroy } from '@angular/core';
import { UserModel } from './../@core/model/user.model';
import { RoleModel } from './../@core/model/role.model';
import { MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SignupService {
  _url = 'http://localhost:80/';

  private _roles = [
    {
      id: 1,
      name: 'Admin',
    },
    {
      id: 2,
      name: 'Volunteer',
    },
    {
      id: 3,
      name: 'Student',
    },
  ];
  private _matDialogConfig: MatDialogConfig = {
    minWidth: '250px',
    minHeight: '200px',
  };
  constructor(private _http: HttpClient) {}

  getAllroles(): RoleModel[] {
    return this._roles;
  }

  addUser(user: UserModel) {
    try {
      return this._http.post<any>(this._url + 'api/signup', user);
    } catch (e) {
      throw new Error();
    }
  }
}
