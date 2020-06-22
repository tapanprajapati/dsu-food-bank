import { OrderModel } from '@core/model/order.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private _orders: OrderModel[] = [
    {
      id: 7542,
      items: [
        {
          name: 'Toilet Paper',
          qty: '1',
        },
        {
          name: 'Tomato',
          qty: '2 Kg',
        },
        {
          name: 'Beef',
          qty: '5',
        },
      ],
      userid: 'B00785474',
      placedDate: 'June 16, 2020',
      pickupDate: 'June 18, 2020',
      status: 'PROCESSING',
    },
    {
      id: 7543,
      items: [
        {
          name: 'Toilet Paper',
          qty: '1',
        },
        {
          name: 'Tomato',
          qty: '2 Kg',
        },
        {
          name: 'Beef',
          qty: '5',
        },
        {
          name: 'Can Food',
          qty: '5',
        },
        {
          name: 'Potato',
          qty: '1 kg',
        },
        {
          name: 'Latus',
          qty: '1 Pack',
        },
      ],
      userid: 'B00851654',
      placedDate: 'June 16, 2020',
      pickupDate: 'June 20, 2020',
      status: 'PENDING',
    },
    {
      id: 7544,
      items: [
        {
          name: 'Toilet Paper',
          qty: '1',
        },
        {
          name: 'Tomato',
          qty: '2 Kg',
        },
        {
          name: 'Beef',
          qty: '5',
        },
      ],
      userid: 'B00959512',
      placedDate: 'June 12, 2020',
      pickupDate: 'June 15, 2020',
      status: 'PENDING',
    },
    {
      id: 7545,
      items: [
        {
          name: 'Toilet Paper',
          qty: '1',
        },
        {
          name: 'Tomato',
          qty: '2 Kg',
        },
        {
          name: 'Beef',
          qty: '5',
        },
      ],
      userid: 'B00863254',
      placedDate: 'June 15, 2020',
      pickupDate: 'June 18, 2020',
      status: 'REJECTED',
    },
    {
      id: 7546,
      items: [
        {
          name: 'Toilet Paper',
          qty: '1',
        },
        {
          name: 'Tomato',
          qty: '2 Kg',
        },
        {
          name: 'Beef',
          qty: '5',
        },
      ],
      userid: 'B00887744',
      placedDate: 'June 16, 2020',
      pickupDate: 'June 18, 2020',
      status: 'PROCESSING',
    },
    {
      id: 7547,
      items: [
        {
          name: 'Toilet Paper',
          qty: '1',
        },
        {
          name: 'Tomato',
          qty: '2 Kg',
        },
        {
          name: 'Beef',
          qty: '5',
        },
      ],
      userid: 'B0083214',
      placedDate: 'June 17, 2020',
      pickupDate: 'June 18, 2020',
      status: 'PROCESSING',
    },
    {
      id: 7548,
      items: [
        {
          name: 'Toilet Paper',
          qty: '1',
        },
        {
          name: 'Tomato',
          qty: '2 Kg',
        },
        {
          name: 'Beef',
          qty: '5',
        },
      ],
      userid: 'B00785474',
      placedDate: 'June 16, 2020',
      pickupDate: 'June 19, 2020',
      status: 'PENDING',
    },
    {
      id: 7549,
      items: [
        {
          name: 'Toilet Paper',
          qty: '1',
        },
        {
          name: 'Tomato',
          qty: '2 Kg',
        },
        {
          name: 'Beef',
          qty: '5',
        },
      ],
      userid: 'B00802010',
      placedDate: 'June 11, 2020',
      pickupDate: 'June 15, 2020',
      status: 'COMPLETED',
    },
    {
      id: 7550,
      items: [
        {
          name: 'Toilet Paper',
          qty: '1',
        },
        {
          name: 'Tomato',
          qty: '2 Kg',
        },
        {
          name: 'Beef',
          qty: '5',
        },
      ],
      userid: 'B00828282',
      placedDate: 'June 14, 2020',
      pickupDate: 'June 18, 2020',
      status: 'COMPLETED',
    },
    {
      id: 7551,
      items: [
        {
          name: 'Toilet Paper',
          qty: '1',
        },
        {
          name: 'Tomato',
          qty: '2 Kg',
        },
        {
          name: 'Beef',
          qty: '5',
        },
      ],
      userid: 'B00838383',
      placedDate: 'June 12, 2020',
      pickupDate: 'June 20, 2020',
      status: 'REJECTED',
    },
    {
      id: 7552,
      items: [
        {
          name: 'Toilet Paper',
          qty: '1',
        },
        {
          name: 'Tomato',
          qty: '2 Kg',
        },
        {
          name: 'Beef',
          qty: '5',
        },
        {
          name: 'Beef',
          qty: '5',
        },
      ],
      userid: 'B00704125',
      placedDate: 'June 16, 2020',
      pickupDate: 'June 18, 2020',
      status: 'PENDING',
    },
  ];

  getAllOrders(): OrderModel[] {
    return this._orders;
  }

  getOrderDetails(orderId: number) {
    return this._orders.find((order: OrderModel) => order.id === orderId);
  }
}
