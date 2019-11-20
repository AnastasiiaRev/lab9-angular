import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './homepage/profile/profile.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { AddOrderComponent } from './dashboard/add-order/add-order.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'admin', component: OrdersComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' },
    children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'add-order', component: AddOrderComponent },
    ]
  },
  {
    path: 'user',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { role: 'user' },
    children: [
      { path: 'profile', component: ProfileComponent }
    ]
  },
  { path: '**', component: LoginComponent, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
