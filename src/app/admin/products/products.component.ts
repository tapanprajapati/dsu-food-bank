import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from './../../products/product.service';
import { MatDialogWrapperComponent } from '@shared/mat-dialog-wrapper/mat-dialog-wrapper.component';
import { ProductModel } from '@core/model/product.model';
import { AdminProductService } from './../services/admin-product.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryModel } from '@app/@core/model/category.model';
import { untilDestroyed } from '@app/@core';
import { ApiResponseModel } from '@app/@core/model/api-response.model';
import { GlobalErrorService } from '@app/@core/services/global-error.service';
import { AdminAddEditProductDialog } from './add-edit-product-dialog/add-edit-product.dialog';
import { Button } from 'protractor';
// import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
// import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  private _Products: ProductModel[];
  private _Categories: CategoryModel[];
  public CategoryFormGroup: FormGroup;
  displayedColumns: string[] = ['id', 'name', 'category', 'availableQuantity', 'limit', 'delete'];
  categoryColumns: string[] = ['id', 'name', 'edit'];
  dataSource: MatTableDataSource<ProductModel>;
  categorySource: MatTableDataSource<CategoryModel>;
  private _matDialogConfig: MatDialogConfig = {
    minWidth: '250px',
    minHeight: '200px',
  };
  public buttonName = 'Add';

  @ViewChild('productsPaginator') paginator: MatPaginator;
  @ViewChild('categoryPaginator') categoryPaginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatSort, { static: true }) categorySort: MatSort;
  constructor(
    public dialog: MatDialog,
    private _ProductService: AdminProductService,
    private _globalErrorService: GlobalErrorService,
    public Successdialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}
  ngOnDestroy(): void {}

  ngOnInit() {
    this._getAllProducts();
    this._getAllCategories();
    this._createForm();
  }
  private _getAllProducts() {
    this._ProductService.getAllProducts(null).subscribe((res) => {
      this._Products = res['items'] as ProductModel[];
      this._initializeDataGrid();
    });
  }

  private _getAllCategories() {
    this._ProductService
      .getAllCategories()
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: ApiResponseModel) => {
          this._Categories = res.items as CategoryModel[];
          this.setCategoryTable(this._Categories);
        },
        (err) => {
          this._globalErrorService.reactToAppError(err);
        }
      );
  }

  private setCategoryTable(categories: CategoryModel[]) {
    this.categorySource = new MatTableDataSource<CategoryModel>(categories);
    this.categorySource.paginator = this.categoryPaginator;
    this.categorySource.sort = this.categorySort;
  }

  private _initializeDataGrid() {
    this.dataSource = new MatTableDataSource<ProductModel>(this._Products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(id: number) {
    this._ProductService.deleteProductById(id).subscribe((res) => {
      this._getAllProducts();
    });
  }

  edit(id: number) {
    const dialogRef = this.dialog.open(AdminAddEditProductDialog, {
      width: '90vw',
      height: 'max-content',
      data: id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      const dialogConfig = this._matDialogConfig;
      if (result) {
        console.log(result);
        dialogConfig.data = { header: 'Success!', content: 'Product edited successfully.' };
        this._getAllProducts();
        this.Successdialog.open(MatDialogWrapperComponent, dialogConfig);
      } else if (result == null) {
      } else {
        dialogConfig.data = { header: 'OOPS!', content: 'Something went wrong' };
        this._getAllProducts();
        this.Successdialog.open(MatDialogWrapperComponent, dialogConfig);
      }
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AdminAddEditProductDialog, {
      width: '90vw',
      height: 'max-content',
    });

    dialogRef.afterClosed().subscribe((result) => {
      const dialogConfig = this._matDialogConfig;
      if (result) {
        dialogConfig.data = { header: 'Success!', content: 'Product added successfully.' };
        this._getAllProducts();
        this.Successdialog.open(MatDialogWrapperComponent, dialogConfig);
      } else if (result == null) {
      } else {
        dialogConfig.data = { header: 'OOPS!', content: 'Something went wrong' };
        this._getAllProducts();
        this.Successdialog.open(MatDialogWrapperComponent, dialogConfig);
      }
    });
  }
  get name() {
    return this.CategoryFormGroup.controls.name;
  }
  get id() {
    return this.CategoryFormGroup.controls.id;
  }
  private _createForm() {
    this.CategoryFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      id: [],
    });
  }
  public updateCategory() {
    console.log(this.CategoryFormGroup.controls.id.value);
    console.log(this.CategoryFormGroup.controls.name.value);
  }
  public editCategory(category: CategoryModel) {
    this.buttonName = 'Edit';
    this.CategoryFormGroup.controls.id.setValue(category.id);
    this.CategoryFormGroup.controls.name.setValue(category.name);
  }
  private resetForm() {
    this.buttonName = 'Add';
    this.CategoryFormGroup.controls.id.setValue(null);
    this.CategoryFormGroup.controls.name.setValue(null);
  }
}
