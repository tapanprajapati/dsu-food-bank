import { Injectable, OnDestroy } from '@angular/core';
import { UserModel } from './../@core/model/user.model';
import { RoleModel } from './../@core/model/role.model';
import { MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SignupService {
  _url = 'http://localhost:3000/register_user';

  private _roles = [
    {
      id: 1,
      name: 'Supplier',
    },
    {
      id: 2,
      name: 'Student',
    },
    {
      id: 3,
      name: 'Volunteer',
    },
  ];

  constructor(private _http: HttpClient) {}
  private _matDialogConfig: MatDialogConfig = {
    minWidth: '250px',
    minHeight: '200px',
  };

  getAllroles(): RoleModel[] {
    return this._roles;
  }

  addUser(user: UserModel) {
    const dialogConfig = this._matDialogConfig;
    dialogConfig.data = { header: 'Success!', content: 'User added successfully.' };
    return this._http.post<any>(this._url, user);
  }
}
