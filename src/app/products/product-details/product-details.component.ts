import { Title } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { APP_NAME } from '@core/const/app.const';
import { ProductModel } from '@core/model/product.model';

import { CartService } from './../../cart/cart.service';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: ProductModel;
  private productId: string;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _titleService: Title,
    private _cartService: CartService
  ) {
    this._fetchProductId();
  }

  ngOnInit() {
    this.product = this._getProductDetails(this.productId);
    this._titleService.setTitle(`${this.product.name} - ${this.product.categoryName} - ${APP_NAME}`);
  }

  ngOnDestroy() {}

  addToCart(product: ProductModel) {
    this._cartService.addToCart(product);
  }

  private _fetchProductId() {
    this._route.params.subscribe((params) => {
      this.productId = params.id;
    });
  }
  private _getProductDetails(productId: string): ProductModel {
    return this._productService.getProductDetails(productId);
  }
}
