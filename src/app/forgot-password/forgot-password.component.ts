import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  resetPasswordForm!: FormGroup;
  isResetPwdLinkSent = false;

  constructor(private formBuilder: FormBuilder) {
    this._resetPasswordForm();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  resetPasswordLink() {
    if (this.resetPasswordForm.valid) {
      this.resetPasswordForm.reset();
      this.isResetPwdLinkSent = true;
    }
  }

  get email() {
    return this.resetPasswordForm.controls.email;
  }

  private _resetPasswordForm() {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
