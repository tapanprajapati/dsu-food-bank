import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Logger, untilDestroyed } from '@core';
import { AuthenticationService } from './authentication.service';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  isLoading = false;

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

  login() {
    if (this.loginForm.valid) {
      this.authenticationService.setIsLoggedIn(true);
      this.loginForm.reset();
      this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });
    }
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
