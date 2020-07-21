import { OrderDetailModel, OrderModel } from './../../@core/model/order.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { OrderService } from './../order.service';
import { untilDestroyed } from '@app/@core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  orderId: number;
  order: OrderDetailModel[];
  orderStatus = ['PLACED', 'APPROVED', 'PROCESSING', 'RECEIVED'];

  constructor(private _route: ActivatedRoute, private _orderService: OrderService) {}

  ngOnInit() {
    this._observeOrderId();
    this._getOrderDetails(this.orderId);
  }
  ngOnDestroy() {}

  private _observeOrderId() {
    this._route.params.pipe(untilDestroyed(this)).subscribe((params) => {
      this.orderId = +params.id;
    });
  }
  private _getOrderDetails(orderId: number) {
    this._orderService.getOrderDetails(orderId).subscribe((res) => {
      console.log(res);
      this.order = res['result'] as OrderDetailModel[];
      console.log(this.order);
    });
  }
}
