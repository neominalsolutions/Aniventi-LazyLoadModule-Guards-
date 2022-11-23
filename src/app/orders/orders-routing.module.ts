import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageQuitGuard } from '../detail-page-quit.guard';
import { PageGuard } from '../page.guard';
import { DetailComponent } from './detail/detail.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { OrdersComponent } from './orders.component';

// detail sayfasına giderken page guarda uğra
// data userdefined kullanıcı tanımlı sayfalar arası geçişlerde veri göndermek veya taşımak için tercih edilen bir yöntem. urlden değil direk angular framework üzeriinden activatedRoute service ile erişebiliriz. querystringden güvenl bir veri taşıma yöntemi

const routes: Routes = [
  { path: '', component: OrdersComponent },
  {
    path:'invoice',
    component:InvoicesComponent
  },
  { 
    path:'detail/:id', component:DetailComponent,
    canDeactivate:[DetailPageQuitGuard]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
