import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  // TODO: Create a model `role` as data flows from backend
  roles: Array<string> = ['Supplier', 'Student', 'Volunteer'];

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this._createSignupForm();
  }
  ngOnDestroy() {}

  signup() {
    if (this.signupForm.valid) {
      // TODO:
      // 1. Create a user model to holde the form values
      // 2. Need to pass the user model to service to store in database
      // 3. On success, Show material dialog box indicating successful registration
      // 4. auto direct to login router after few seconds
    }
    alert('Registred Successfully.');
    this.router.navigate(['/login']);
  }

  get bannerId() {
    return this.signupForm.controls.bannerId;
  }
  get firstName() {
    return this.signupForm.controls.firstName;
  }
  get lastName() {
    return this.signupForm.controls.lastName;
  }
  get email() {
    return this.signupForm.controls.email;
  }
  get password() {
    return this.signupForm.controls.password;
  }

  private _createSignupForm() {
    this.signupForm = this.formBuilder.group({
      bannerId: ['', [Validators.required, Validators.maxLength(9)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')],
      ],
    });
  }
}
