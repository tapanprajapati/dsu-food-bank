import { ProductModel } from '@core/model/product.model';
import { AdminProductService } from './../services/admin-product.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CategoryModel } from '@app/@core/model/category.model';
import { untilDestroyed } from '@app/@core';
import { ApiResponseModel } from '@app/@core/model/api-response.model';
import { GlobalErrorService } from '@app/@core/services/global-error.service';
import { AdminAddEditProductDialog } from './add-edit-product-dialog/add-edit-product.dialog';
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
  displayedColumns: string[] = ['id', 'name', 'category', 'availableQuantity', 'limit', 'delete'];
  categoryColumns: string[] = ['id', 'name', 'edit'];
  dataSource: MatTableDataSource<ProductModel>;
  categorySource: MatTableDataSource<CategoryModel>;

  @ViewChild('productsPaginator') paginator: MatPaginator;
  @ViewChild('categoryPaginator') categoryPaginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatSort, { static: true }) categorySort: MatSort;
  constructor(
    public dialog: MatDialog,
    private _ProductService: AdminProductService,
    private _globalErrorService: GlobalErrorService
  ) {}
  ngOnDestroy(): void {}

  ngOnInit() {
    this._getAllProducts();
    this._getAllCategories();
  }
  private _getAllProducts() {
    this._ProductService.getAllProducts(null).subscribe((res) => {
      this._Products = res['items'] as ProductModel[];
      // console.log(res);
      // console.log(this._Products);
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

  delete(product: ProductModel) {
    // const dialogRef = this.dialog.open(DeleteDialogComponent, {
    //   width: '250px',
    //   data: product,
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.dataSource.data.splice(this.dataSource.data.indexOf(product), 1);
    //     this.dataSource.data = this.dataSource.data;
    //   }
    //   console.log(result);
    // });
  }

  edit(id: number) {
    const dialogRef = this.dialog.open(AdminAddEditProductDialog, {
      width: '90vw',
      height: 'max-content',
      data: id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._getAllProducts();
      }
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AdminAddEditProductDialog, {
      width: '90vw',
      height: 'max-content',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._getAllProducts();
      }
    });
  }
}
