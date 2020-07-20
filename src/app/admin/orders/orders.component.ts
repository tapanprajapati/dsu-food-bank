import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AdminOrderService } from './../services/admin-order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class AdminOrdersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userid', 'placed_date', 'pickup_date', 'status', 'view'];
  dataSource: MatTableDataSource<Order>;

  total: number;
  pending: number;
  processing: number;
  completed: number;
  rejected: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private adminOrderService: AdminOrderService) {}

  ngOnInit() {
    this.getData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getNumbers();
  }

  getData() {
    this.dataSource = new MatTableDataSource<Order>(this.adminOrderService.getOrders());
  }

  getNumbers() {
    this.total = this.dataSource.data.length;
    this.pending = this.dataSource.data.filter((order) => order.status === 'PENDING').length;
    this.rejected = this.dataSource.data.filter((order) => order.status === 'REJECTED').length;
    this.processing = this.dataSource.data.filter((order) => order.status === 'PROCESSING').length;
    this.completed = this.dataSource.data.filter((order) => order.status === 'COMPLETED').length;
  }

  getOrdersByStatus(status: string) {
    if (status === 'TOTAL') {
      this.dataSource.data = this.adminOrderService.getOrders();
      return;
    }
    this.dataSource.data = this.adminOrderService.filterByStatus(status);
  }
}

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
