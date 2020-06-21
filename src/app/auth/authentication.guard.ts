import { Injectable, OnDestroy } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '@app/auth/authentication.service';

import { Logger, untilDestroyed } from '@core';

const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate, OnDestroy {
  private _isLoggedIn: boolean;
  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this._observeAuthenticationFlag();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._isLoggedIn) {
      return true;
    }

    log.debug('Not authenticated, redirecting and adding redirect url...');
    this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }

  ngOnDestroy() {}

  private _observeAuthenticationFlag() {
    this.authenticationService.isLoggedIn.pipe(untilDestroyed(this)).subscribe((val) => {
      this._isLoggedIn = val;
    });
  }
}
