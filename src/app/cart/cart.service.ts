import { Injectable, OnDestroy } from '@angular/core';
import { untilDestroyed } from '@app/@core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AuthenticationService } from '@app/auth/authentication.service';
import { MatDialogWrapperComponent } from '@shared/mat-dialog-wrapper/mat-dialog-wrapper.component';
import { ProductModel } from '@core/model/product.model';

@Injectable({ providedIn: 'root' })
export class CartService implements OnDestroy {
  private _cartItems: ProductModel[] = [];
  private _isLoggedIn: boolean;
  private _matDialogConfig: MatDialogConfig = {
    minWidth: '250px',
    minHeight: '200px',
  };

  constructor(private _authenticationService: AuthenticationService, private _matDialog: MatDialog) {
    this._loginFlagHandler();
  }

  ngOnDestroy() {}

  /**
   * TODO:
   * 1. Check whether user is logged in or not?
   * 2. If not, ask user to login.
   * 3. If logged in, add the product inside the cart
   * 4. Logic to check whether user has already added the product.
   */
  addToCart(product: ProductModel) {
    const dialogConfig = this._matDialogConfig;
    if (this._isLoggedIn) {
      this._cartItems.push(product);
      dialogConfig.data = { header: 'Success!', content: 'Product added successfully.' };
    } else {
      // Using `href` for login anchor link as innerHTML of angular only parses native HTML content
      dialogConfig.data = {
        header: 'Sign in required!',
        content: `<div class="row">
        <div class="col-md-12">Please login to add products into the cart.</div>
        <div class="col-md-12"><a class="app-link" href="/login">Login</a></div>
        </div>`,
      };
    }
    this._matDialog.open(MatDialogWrapperComponent, dialogConfig);
  }

  private _loginFlagHandler() {
    this._authenticationService.isLoggedIn.pipe(untilDestroyed(this)).subscribe((val) => {
      this._isLoggedIn = val;
    });
  }
}
