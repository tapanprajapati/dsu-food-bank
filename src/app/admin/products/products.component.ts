import { ProductModel } from '@core/model/product.model';
import { AdminProductService } from './../services/admin-product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
// import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
// import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  private _Products: ProductModel[];
  displayedColumns: string[] = ['id', 'name', 'category', 'availableQuantity', 'limit', 'delete'];
  dataSource: MatTableDataSource<ProductModel>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog, private _ProductService: AdminProductService) {}

  ngOnInit() {
    this._getAllProducts();
    this._initializeDataGrid();
  }
  private _getAllProducts() {
    this._ProductService.getAllProducts().subscribe((res) => {
      this._Products = res['items'] as ProductModel[];
      console.log(res);
      console.log(this._Products);
      this._initializeDataGrid();
    });
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

  edit(product: ProductModel) {
    // const dialogRef = this.dialog.open(EditDialogComponent, {
    //   width: '250px',
    //   data: product,
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //   }
    //   // console.log(result);
    // });
  }
}
