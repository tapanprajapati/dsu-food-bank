/**
 *   @author Siddharth Kapania <sid.kapania@dal.ca>
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Logger, untilDestroyed } from '@core';
import { AuthenticationService } from './authentication.service';
import { first } from 'rxjs/operators';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  isLoading = false;
  public error: string;
  token = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this._createLoginForm();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.value).subscribe((res) => {
        this.router.navigate(['/products']);
        localStorage.setItem('access_key', res.token);
        localStorage.setItem('role_id', res.authenticate.user.roleid);
        const myData = localStorage.getItem('access_key');
        const myData2 = localStorage.getItem('role_id');
        console.log(myData);
        console.log(myData2);
      });
    }
    this.loginForm.reset();
  }

  get bannerId() {
    return this.loginForm.controls.bannerId;
  }
  get password() {
    return this.loginForm.controls.password;
  }

  private _createLoginForm() {
    this.loginForm = this.formBuilder.group({
      bannerId: ['', [Validators.required, Validators.maxLength(9)]],
      password: ['', Validators.required],
    });
  }
}
