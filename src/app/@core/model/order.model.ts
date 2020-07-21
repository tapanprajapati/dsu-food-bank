import { ProductModel } from '@core/model/product.model';

export interface OrderDetailModel {
  orderId: number;
  item: ProductModel[];
  OrderDate: Date;
  DeliveredDate: Date;
  status: string;
  PickUpSlot: Date;
}
export interface OrderModel {
  orderId: number;
  userid: string;
  placedDate: string;
  pickupDate?: string;
  status: string;
  pickupSlot?: string;
}
