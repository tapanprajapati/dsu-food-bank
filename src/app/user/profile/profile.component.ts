import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from './../user.service';
import { AuthenticationService } from '@app/auth';
import { untilDestroyed } from '@app/@core';
import { UserModel } from '@core/model/user.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: UserModel;
  constructor(private _userService: UserService, private _authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.getUser();
  }

  ngOnDestroy() {}

  getUser() {
    this._userService
      .getUser(this._authenticationService.authUserBannerId)
      .pipe(untilDestroyed(this))
      .subscribe(
        (res) => {
          this.user = res?.items;
        },
        (err) => {}
      );
  }
}
