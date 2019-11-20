import { NgModule } from '@angular/core';

import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OrdersComponent,
    AddOrderComponent
  ],
  imports: [ SharedModule ],
  providers: []
})
export class DashboardModule { }
