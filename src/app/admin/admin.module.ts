import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { AdminOrdersComponent } from './orders/orders.component';
import { AdminWorkersComponent } from './workers/workers.component';
import { AdminProductsComponent } from './products/products.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, AdminRoutingModule],
  declarations: [AdminComponent, AdminOrdersComponent, AdminProductsComponent, AdminWorkersComponent],
})
export class AdminModule {}
