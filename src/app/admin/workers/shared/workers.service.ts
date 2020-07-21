import { Workers, WorkersResponse, UserRoles } from '../../../@core/model/workers.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkersService {
  formData: Workers;
  public JobsList: Workers[];

  readonly URL = 'http://localhost:80/api';
  //'http://companyx-env.eba-niaefern.us-east-1.elasticbeanstalk.com/api';

  constructor(private http: HttpClient) {}

  getWorkersList() {
    return this.http.get<WorkersResponse>(this.URL + '/employee');
  }

  deleteUserRole(formData: UserRoles) {
    return this.http.delete(this.URL + '/employee/' + formData.BannerId + '/' + formData.RoleId);
  }

  addUserRole(formData: UserRoles) {
    return this.http.post(this.URL + '/employee/add', formData);
    //return a;
  }
}
