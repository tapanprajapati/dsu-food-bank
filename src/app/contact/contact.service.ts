import { ContactUsModel } from '../@core/model/contactUs.model';
import { ApiResponseModel } from '@core/model/api-response.model';

/**
 * @author Asmita Chaudhari <Asmita.Chaudhari@dal.ca>
 *
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogConfig } from '@angular/material/dialog';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class ContactService {
  formData: ContactUsModel;
  _url = 'http://localhost:80/';

  private _matDialogConfig: MatDialogConfig = {
    minWidth: '250px',
    minHeight: '200px',
  };
  constructor(private _http: HttpClient) {}

  postMessage(formData: ContactUsModel) {
    return this._http.post<ApiResponseModel>(this._url + 'api/contactUs', formData);
    //return a;
  }
  private _getUrl() {
    return `${environment.serverUrl}products/`;
  }
}
