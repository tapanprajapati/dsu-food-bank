import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminOrderService {
  orders = ORDERS;

  constructor() {}

  getOrders(): Order[] {
    return this.orders;
  }

  filterByStatus(status: string): Order[] {
    return this.orders.filter((order) => order.status === status);
  }
}

export interface Order {
  id: number;
  userid: string;
  placed_date: string;
  pickup_date: string;
  status: string;
}
const PENDING = 'PENDING';
const PROCESSING = 'PROCESSING';
const COMPLETED = 'COMPLETED';
const REJECTED = 'REJECTED';

export const ORDERS: Order[] = [
  {
    id: 7542,
    userid: 'B00785474',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 18, 2020',
    status: PENDING,
  },
  {
    id: 7543,
    userid: 'B00851654',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 20, 2020',
    status: PENDING,
  },
  {
    id: 7544,
    userid: 'B00959512',
    placed_date: 'June 12, 2020',
    pickup_date: 'June 15, 2020',
    status: PENDING,
  },
  {
    id: 7545,
    userid: 'B00863254',
    placed_date: 'June 15, 2020',
    pickup_date: 'June 18, 2020',
    status: REJECTED,
  },
  {
    id: 7546,
    userid: 'B00887744',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 18, 2020',
    status: PROCESSING,
  },
  {
    id: 7547,
    userid: 'B0083214',
    placed_date: 'June 17, 2020',
    pickup_date: 'June 18, 2020',
    status: PROCESSING,
  },
  {
    id: 7548,
    userid: 'B00785474',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 19, 2020',
    status: PENDING,
  },
  {
    id: 7549,
    userid: 'B00802010',
    placed_date: 'June 11, 2020',
    pickup_date: 'June 15, 2020',
    status: COMPLETED,
  },
  {
    id: 7550,
    userid: 'B00828282',
    placed_date: 'June 14, 2020',
    pickup_date: 'June 18, 2020',
    status: COMPLETED,
  },
  {
    id: 7551,
    userid: 'B00838383',
    placed_date: 'June 12, 2020',
    pickup_date: 'June 20, 2020',
    status: REJECTED,
  },
  {
    id: 7552,
    userid: 'B00704125',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 18, 2020',
    status: PENDING,
  },
];
