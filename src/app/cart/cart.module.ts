import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModel } from './cart-routing.module';
import { MaterialModule } from '@app/material.module';

import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule, MaterialModule, CartRoutingModel],
  declarations: [CartComponent, CartItemComponent],
  providers: [],
})
export class CartModule {}
