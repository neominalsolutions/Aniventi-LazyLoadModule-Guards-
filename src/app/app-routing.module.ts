import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { ModuleGuard } from './module.guard';

// Lazy Loaded Module yapıldığında sadece AppRouting dosyasında path tanımlaması module bazlı yapılır.
// Uygulama ilk açılışında componentlerin yüklenmesi yerine ilgili module gidilince yüklenmesini sağlayan performans amaçlı bir çözüm.

// app routing dosyasına canLoad olan guardlar tanımlanır. 

const routes: Routes = [
  { 
    path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) ,
    canLoad:[ModuleGuard]
  
  },
  { 
    
    path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule), 
    canLoad:[ModuleGuard]
  },
  {
    path:'access-denied',
    component:AccessdeniedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
