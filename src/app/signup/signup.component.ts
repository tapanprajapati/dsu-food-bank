import { UserModel } from './../@core/model/user.model';
import { RoleModel } from './../@core/model/role.model';
import { SignupService } from './signup.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  roles: RoleModel[];
  User: UserModel;
  constructor(private SignupService: SignupService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this._createSignupForm();
    this.loadRoles();
  }
  ngOnDestroy() {}

  signup() {
    console.log(this.signupForm.controls);
    if (this.signupForm.valid) {
      this.User.bannerId = this.signupForm.controls.bannerId.value;
      this.User.firstname = this.signupForm.controls.firstname.value;
      this.User.lastname = this.signupForm.controls.lastname.value;
      this.User.email = this.signupForm.controls.email.value;
      this.User.password = this.signupForm.controls.password.value;
      this.User.roleid = this.signupForm.controls.role.value;
      console.log(this.User);

      this.SignupService.addUser(this.User).subscribe(
        (res) => {
          alert('Registred Successfully.');
          this.router.navigate(['/login']);
        },
        (error) => {
          if (error.status == 500) {
            alert('Registred failed.');
          }
        }
      );
    }
    // alert('Registred Successfully.');
    // this.router.navigate(['/login']);
  }

  loadRoles() {
    this.roles = this.SignupService.getAllroles();
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
  get role() {
    return this.signupForm.controls.role;
  }
  get confirm_password() {
    return this.signupForm.controls.confirm_password;
  }
  private _createSignupForm() {
    this.signupForm = this.formBuilder.group(
      {
        bannerId: ['', [Validators.required, Validators.maxLength(9)]],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')],
        ],
        confirm_password: ['', Validators.required],
        role: ['', Validators.required],
      },
      {
        validator: ConfirmedValidator('password', 'confirm_password'),
      }
    );
  }
}
