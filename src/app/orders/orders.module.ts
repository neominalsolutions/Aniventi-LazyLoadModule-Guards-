import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { DetailComponent } from './detail/detail.component';
import { InvoicesComponent } from './invoices/invoices.component';


@NgModule({
  declarations: [
    OrdersComponent,
    DetailComponent,
    InvoicesComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
