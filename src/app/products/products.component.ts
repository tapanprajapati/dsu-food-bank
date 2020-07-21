/**
 * @author Parth Parmar <parth.parmar@default.ca>
 *
 */

import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { untilDestroyed } from '@core';
import { slideToBottom } from '@core/animations/animation';

import { ProductModel } from '@core/model/product.model';
import { CategoryModel } from '@core/model/category.model';
import { ApiResponseModel } from '@core/model/api-response.model';

import { GlobalErrorService } from '@app/@core/services/global-error.service';
import { ProductService } from './product.service';
import { CartService } from '@app/cart/cart.service';

import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [slideToBottom],
})
export class ProductsComponent implements OnInit, OnDestroy {
  filteredProducts: ProductModel[];
  categories: CategoryModel[];
  searchedProduct: string;
  categoryControl = new FormControl();
  faFilter = faFilter;
  faSearch = faSearch;
  isLoading: boolean;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _cartService: CartService,
    private _globalErrorService: GlobalErrorService
  ) {}

  ngOnInit() {
    this._showLoader(true);
    this.resetProducts();
    this.getAllProducts();
    this.getAllCategories();
  }

  ngOnDestroy() {}

  getAllProducts() {
    this._productService
      .getAllProducts()
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: ApiResponseModel) => {
          this.filteredProducts = res.items as ProductModel[];
          this._showLoader(false);
        },
        (err) => {
          this._globalErrorService.reactToAppError(err);
          this._showLoader(false);
        }
      );
  }

  getAllCategories() {
    this._productService
      .getAllCategories()
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: ApiResponseModel) => {
          this.categories = res.items as CategoryModel[];
        },
        (err) => {
          this._globalErrorService.reactToAppError(err);
        }
      );
  }

  goToProductDetails(productId: string) {
    this._router.navigate([`/products/${productId}`]);
  }

  addToCart(product: ProductModel, event: Event) {
    event.stopPropagation();
    this._cartService.addToCart(product);
  }

  filterProductsByName(productName: string) {
    // this.filteredProducts = this._productService.filterProductsByName(productName);
  }

  categorySelectionToggled(isOpened: boolean) {
    const selectedCategories = this.categoryControl.value;
    if (!isOpened && this.categoryControl.value?.length > 0) {
      // this.filteredProducts = this._filterProductsByCategory(selectedCategories);
    }
  }

  resetProducts() {
    this.searchedProduct = '';
    this.categoryControl.reset();
  }

  // private _filterProductsByCategory(categories: string[]): ProductModel[] {
  //   // return this._productService.filterProductsByCategory(categories);
  // }

  private _showLoader(val: boolean) {
    this.isLoading = val;
  }
}
