import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from './../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    ProductsRoutingModule,
  ],
  declarations: [ProductsComponent, ProductDetailsComponent],
})
export class ProductsModule {}
