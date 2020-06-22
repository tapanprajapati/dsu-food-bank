import { TempProductModel } from './temp-product.model';

export interface OrderModel {
  id: number;
  // TODO: Replace with ProductModel once backend is ready
  items: TempProductModel[];
  userid: string;
  // TODO: Use Date
  placedDate: string;
  pickupDate: string;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED';
  // TODO: Make mandatory once backend is ready
  pickupSlot?: string;
}
