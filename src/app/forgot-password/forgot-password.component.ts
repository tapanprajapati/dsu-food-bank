import { ForgotPasswordSerice } from './forogt-password.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  resetPasswordForm!: FormGroup;
  isResetPwdLinkSent = false;

  constructor(
    private formBuilder: FormBuilder,
    private _http: HttpClient,
    private _ForgotPasswordSerice: ForgotPasswordSerice
  ) {
    this._resetPasswordForm();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  resetPasswordLink() {
    if (this.resetPasswordForm.valid) {
      this._ForgotPasswordSerice.resetPassword(this.resetPasswordForm.value).subscribe(
        (res) => {
          this.resetPasswordForm.reset();
          this.isResetPwdLinkSent = true;
        },
        (error) => {
          console.log(error.status);
          console.log(error.statusCode);
          this.resetPasswordForm.reset();
          this.isResetPwdLinkSent = false;
        }
      );

      // return this._http.post<any>(`${environment.serverUrl}resetpassword`, this.resetPasswordForm.value);
    }
  }

  get bannerId() {
    return this.resetPasswordForm.controls.bannerId;
  }

  private _resetPasswordForm() {
    this.resetPasswordForm = this.formBuilder.group({
      bannerId: ['', [Validators.required, Validators.pattern('^(B){1}([0-9]){8}$')]],
    });
  }
}
