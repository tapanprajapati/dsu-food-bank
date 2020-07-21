import { ProductModel } from '@core/model/product.model';

export interface OrderDetailModel {
  orderId: number;
  item: item[];
  OrderDate: Date;
  DeliveredDate: Date;
  status: string;
  PickUpSlot: Date;
}
interface item {
  name: string;
  quantity: string;
  CategoryName: string;
}
export interface OrderModel {
  orderId: number;
  userid: string;
  placedDate: string;
  pickupDate?: string;
  status: string;
  pickupSlot?: string;
}
