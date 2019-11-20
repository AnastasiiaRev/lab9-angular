import { Component, OnInit } from '@angular/core';

import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/core/api/orders.service';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './ngx-orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  loadedCharacter: {};
  isLoading = false;


  constructor(private ordersService: OrdersService, private http: HttpClient) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.ordersService.getOrders()
      .subscribe((orders: Order[]) => {
        this.orders = orders;
        this.isLoading = false;
      });

    this.ordersService.getOrdersSub().subscribe(orders => this.orders = orders);

    let character = this.http.get('https://swapi.co/api/people/1');
    let characterHomeworld = this.http.get('https://swapi.co/api/planets/1');

    forkJoin([character, characterHomeworld]).subscribe(results => {
      (results[0] as any).homeworld = results[1];
      this.loadedCharacter = results[0];
    });
  }
}
