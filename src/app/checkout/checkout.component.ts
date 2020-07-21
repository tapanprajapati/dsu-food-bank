import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductModel } from '@core/model/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogWrapperComponent } from '@shared/mat-dialog-wrapper/mat-dialog-wrapper.component';
import { CheckoutService } from './checkoutService.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  filteredProducts: ProductModel[];
  checkoutForm: FormGroup;
  currentDate = new Date();
  private _matDialogConfig: MatDialogConfig = {
    minWidth: '250px',
    minHeight: '200px',
  };

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private formBuilder: FormBuilder,
    private _matDialog: MatDialog,
    private _checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    this._createCheckoutForm();
    this.loadProducts();
  }

  loadProducts() {
    this.filteredProducts = this._getProducts();
  }

  checkout() {
    try {
      console.log(this.checkoutForm.controls);
      if (this.checkoutForm.valid) {
        const dialogConfig = this._matDialogConfig;
        dialogConfig.data = { header: 'Success!', content: 'Order Placed successfully.' };
        this._matDialog.open(MatDialogWrapperComponent, dialogConfig);
        this._router.navigate(['/login']);

        // this._checkoutService.addUser(this.checkoutForm.value).subscribe(
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
  private _getProducts(): ProductModel[] {
    return this._productService.getAllProducts();
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
}
