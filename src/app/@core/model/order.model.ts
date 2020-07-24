import { ProductModel } from './product.model';

export interface OrderModel {
  id: number;
  // TODO: Replace with ProductModel once backend is ready
  items: ProductModel[];
  userid: string;
  pickupDate: Date;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED';
  // TODO: Make mandatory once backend is ready
  pickupSlot: string;
}
