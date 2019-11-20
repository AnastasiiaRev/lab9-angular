import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators';

import { Order } from 'src/app/models/order.model';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(private httpClient: HttpClient) {
  }

  private ordersSub: BehaviorSubject<Order[]> = new BehaviorSubject(null);

  getOrdersSub(): Observable<Order[]> {
    return this.ordersSub.asObservable();
  }

  setOrdersSub(orders: Order[]) {
    this.ordersSub.next(orders);
  }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get(`${environment.apiUrl}/GetOrders`).pipe(
      map((orders: any[]) => orders.map((order: any) =>
        new Order(order.name, order.category, order.price))),
      filter((orders: Order[]) => !!orders),
      tap((orders: Order[]) => console.log('Recieved orders:', orders))
    );
  }
}
