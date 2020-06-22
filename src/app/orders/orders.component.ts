import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { OrderService } from './order.service';
import { OrderModel } from '@core/model/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit, OnDestroy {
  ordersDataSource: MatTableDataSource<OrderModel>;
  // TODO: Make it dynamic, fetch it based on OrderModel schema
  orderColumns: string[] = ['Order Id.', 'placed_date', 'pickup_date', 'status', 'actions'];

  // TODO: Verify Sorting
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private _orders: OrderModel[];

  constructor(private _router: Router, private _orderService: OrderService) {}

  ngOnInit() {
    this._getAllOrders();
    this._initializeDataGrid();
  }

  ngOnDestroy() {}

  viewOrderDetails(order: OrderModel) {
    this._router.navigate([`orders/${order.id}`]);
  }

  private _getAllOrders() {
    this._orders = this._orderService.getAllOrders();
  }
  private _initializeDataGrid() {
    this.ordersDataSource = new MatTableDataSource<OrderModel>(this._orders);
    this.ordersDataSource.paginator = this.paginator;
    this.ordersDataSource.sort = this.sort;
  }
}
