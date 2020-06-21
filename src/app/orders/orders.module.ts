import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  imports: [CommonModule, OrdersRoutingModule],
  declarations: [OrdersComponent, OrderDetailsComponent],
  providers: [],
})
export class OrdersModule {}
