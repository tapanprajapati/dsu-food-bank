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
  displayedColumns: string[] = ['name', 'category', 'total', 'limit', 'on_order', 'delete'];
  dataSource = new MatTableDataSource<Product>(PRODUCTS);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(product: Product) {
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

  edit(product: Product) {
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

const PENDING = 'PENDING';
const PROCESSING = 'PROCESSING';
const COMPLETED = 'COMPLETED';
const REJECTED = 'REJECTED';

export const PRODUCTS: Product[] = [
  {
    name: 'Milk',
    category: 'Dairy',
    quantity: 10,
    limit: 1,
    on_order: 7,
  },
  {
    name: 'Potatos',
    category: 'Vegetable',
    quantity: 78,
    limit: 4,
    on_order: 18,
  },
  {
    name: 'Onions',
    category: 'Vegetable',
    quantity: 44,
    limit: 4,
    on_order: 8,
  },
  {
    name: 'Pasta',
    category: 'Snack',
    quantity: 10,
    limit: 1,
    on_order: 7,
  },
  {
    name: 'Toilet Paper',
    category: 'Household',
    quantity: 80,
    limit: 2,
    on_order: 74,
  },
  {
    name: 'Spring Water',
    category: 'Drink',
    quantity: 40,
    limit: 2,
    on_order: 14,
  },
  {
    name: 'Chicken Soup',
    category: 'Non-veg',
    quantity: 44,
    limit: 1,
    on_order: 8,
  },
  {
    name: 'Wonderbar',
    category: 'Chocolate',
    quantity: 50,
    limit: 2,
    on_order: 9,
  },
  {
    name: 'Noodle',
    category: 'Snack',
    quantity: 19,
    limit: 1,
    on_order: 5,
  },
];

export const ORDERS: Order[] = [
  {
    id: 7542,
    userid: 'B00785474',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 18, 2020',
    status: PENDING,
  },
  {
    id: 7543,
    userid: 'B00851654',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 20, 2020',
    status: PENDING,
  },
  {
    id: 7544,
    userid: 'B00959512',
    placed_date: 'June 12, 2020',
    pickup_date: 'June 15, 2020',
    status: PENDING,
  },
  {
    id: 7545,
    userid: 'B00863254',
    placed_date: 'June 15, 2020',
    pickup_date: 'June 18, 2020',
    status: REJECTED,
  },
  {
    id: 7546,
    userid: 'B00887744',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 18, 2020',
    status: PROCESSING,
  },
  {
    id: 7547,
    userid: 'B0083214',
    placed_date: 'June 17, 2020',
    pickup_date: 'June 18, 2020',
    status: PROCESSING,
  },
  {
    id: 7548,
    userid: 'B00785474',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 19, 2020',
    status: PENDING,
  },
  {
    id: 7549,
    userid: 'B00802010',
    placed_date: 'June 11, 2020',
    pickup_date: 'June 15, 2020',
    status: COMPLETED,
  },
  {
    id: 7550,
    userid: 'B00828282',
    placed_date: 'June 14, 2020',
    pickup_date: 'June 18, 2020',
    status: COMPLETED,
  },
  {
    id: 7551,
    userid: 'B00838383',
    placed_date: 'June 12, 2020',
    pickup_date: 'June 20, 2020',
    status: REJECTED,
  },
  {
    id: 7552,
    userid: 'B00704125',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 18, 2020',
    status: PENDING,
  },
];

export const USER: User = {
  firstname: 'John',
  lastname: 'Snow',
  bannerid: 'B00000001',
  password: 'ABCD',
  emailid: 'john.snow@dal.ca',
  totalorders: 7,
  birthdate: '24th August, 1998',
};

export interface Product {
  name: string;
  category: string;
  quantity: number;
  limit: number;
  on_order: number;
}

export interface Order {
  id: number;
  userid: string;
  placed_date: string;
  pickup_date: string;
  status: string;
}

export interface User {
  firstname: string;
  lastname: string;
  birthdate: string;
  bannerid: string;
  emailid: string;
  password: string;
  totalorders: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
