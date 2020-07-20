/**
 * @author Parth Parmar <parth.parmar@default.ca>
 *
 */

import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { slideToBottom } from '@core/animations/animation';

import { ProductModel } from '@core/model/product.model';
import { CategoryModel } from '@core/model/category.model';

import { ProductService } from './product.service';
import { CartService } from './../cart/cart.service';

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

  constructor(private _productService: ProductService, private _router: Router, private _cartService: CartService) {}

  ngOnInit() {
    this.resetProducts();
    this.loadProducts();
    this._loadCategories();
    this._getAllCategories();
  }

  ngOnDestroy() {}

  goToProductDetails(productId: string) {
    this._router.navigate([`/products/${productId}`]);
  }
  addToCart(product: ProductModel, event: Event) {
    event.stopPropagation();
    this._cartService.addToCart(product);
  }
  filterProductsByName(productName: string) {
    this.filteredProducts = this._productService.filterProductsByName(productName);
  }
  categorySelectionToggled(isOpened: boolean) {
    const selectedCategories = this.categoryControl.value;
    if (!isOpened && this.categoryControl.value?.length > 0) {
      this.filteredProducts = this._filterProductsByCategory(selectedCategories);
    }
  }
  resetProducts() {
    this.searchedProduct = '';
    this.categoryControl.reset();
  }
  loadProducts() {
    this.filteredProducts = this._getProducts();
  }

  private _loadCategories() {
    this.categories = this._getAllCategories();
  }
  private _getProducts(): ProductModel[] {
    return this._productService.getAllProducts();
  }
  private _getAllCategories(): CategoryModel[] {
    return this._productService.getAllCategories();
  }
  private _filterProductsByCategory(categories: string[]): ProductModel[] {
    return this._productService.filterProductsByCategory(categories);
  }
}
