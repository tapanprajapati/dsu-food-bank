import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../products/product.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductModel } from '@core/model/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogWrapperComponent } from '@shared/mat-dialog-wrapper/mat-dialog-wrapper.component';
import { CheckoutService } from './checkout.service';
import { CartService } from '@app/cart/cart.service';
import { GlobalErrorService } from '@app/@core/services/global-error.service';
import { faLongArrowAltLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { untilDestroyed } from '@app/@core';
import { ApiResponseModel } from '@app/@core/model/api-response.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cartItems: ProductModel[];
  isLoading: boolean;
  faLongArrowAltLeft = faLongArrowAltLeft;
  faTimes = faTimes;
  filteredProducts: ProductModel[];
  checkoutForm: FormGroup;
  currentDate = new Date();
  private _matDialogConfig: MatDialogConfig = {
    minWidth: '250px',
    minHeight: '200px',
  };

  constructor(
    private _router: Router,
    private formBuilder: FormBuilder,
    private _matDialog: MatDialog,
    private _checkoutService: CheckoutService,
    private _productService: ProductService,
    private _cartService: CartService,
    private _globalErrorService: GlobalErrorService
  ) {}

  ngOnInit(): void {
    this._createCheckoutForm();
    this._loadShoppingCart();
  }
  ngOnDestroy() {}

  checkout() {
    try {
      console.log(this.checkoutForm.controls);
      if (this.checkoutForm.valid) {
        const dialogConfig = this._matDialogConfig;
        dialogConfig.data = { header: 'Success!', content: 'Order Placed successfully.' };
        this._matDialog.open(MatDialogWrapperComponent, dialogConfig);
        this._router.navigate(['/login']);

        // this._checkoutService.createOrder(this.checkoutForm.value).subscribe(
        //   (res) => {
        //     const dialogConfig = this._matDialogConfig;
        //     dialogConfig.data = { header: 'Success!', content: 'Order Placed successfully.' };
        //     this._matDialog.open(MatDialogWrapperComponent, dialogConfig);
        //     this._router.navigate(['/login']);
        //   },
        //   (error) => {
        //     if (error.status === 500) {
        //       const dialogConfig = this._matDialogConfig;
        //       dialogConfig.data = { header: 'Failure!', content: 'Order failed.' };
        //       this._matDialog.open(MatDialogWrapperComponent, dialogConfig);
        //     }
        //   }
        // );
      }
    } catch (e) {
      const dialogConfig = this._matDialogConfig;
      dialogConfig.data = { header: 'Failure!', content: 'Error Occured.' };
      this._matDialog.open(MatDialogWrapperComponent, dialogConfig);
    }
  }
  get bannerId() {
    return this.checkoutForm.controls.bannerId;
  }
  get firstName() {
    return this.checkoutForm.controls.firstName;
  }
  get lastName() {
    return this.checkoutForm.controls.lastName;
  }
  get email() {
    return this.checkoutForm.controls.email;
  }
  get contactNumber() {
    return this.checkoutForm.controls.contactNumber;
  }
  get pickupDate() {
    return this.checkoutForm.controls.pickupDate;
  }
  get pickupTime() {
    return this.checkoutForm.controls.pickupTime;
  }

  private _createCheckoutForm() {
    this.checkoutForm = this.formBuilder.group({
      bannerId: ['', [Validators.required, Validators.pattern('^(B){1}([0-9]){8}$')]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.minLength(10)]],
      pickupDate: ['', Validators.required],
      pickupTime: ['', [Validators.required, Validators.min(9), Validators.max(18)]],
    });
  }

  deleteProductFromCart(cartProduct: ProductModel) {
    this._cartService
      .deleteProductFromCart(cartProduct.id)
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: ApiResponseModel) => {
          if (res.success && res.result.affectedRows === 1) {
            console.log('Product Deleted Successfully!');
            // TODO: show appropriate success message
            this._loadShoppingCart();
          } // TODO: handle else block
        },
        (err) => {
          this._globalErrorService.reactToAppError(err);
        }
      );
  }

  private _getCartProducts() {
    this._cartService
      .getCartProducts()
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: ApiResponseModel) => {
          this.cartItems = res.items as ProductModel[];
          this._fetchCartProductImages(this.cartItems);
          this._setLoader(false);
        },
        (err) => {
          this._globalErrorService.reactToAppError(err);
        }
      );
  }

  private _fetchCartProductImages(cartProducts: ProductModel[]) {
    cartProducts.forEach((cartProduct) => {
      cartProduct.imagePath = this._productService.fetchProductImage(cartProduct.id);
    });
  }

  private _setLoader(val: boolean) {
    this.isLoading = val;
  }

  private _loadShoppingCart() {
    this._setLoader(true);
    this._getCartProducts();
  }
}
