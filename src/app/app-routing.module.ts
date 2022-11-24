import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { ModuleGuard } from './module.guard';
import { NotFoundComponent } from './not-found/not-found.component';

// Lazy Loaded Module yapıldığında sadece AppRouting dosyasında path tanımlaması module bazlı yapılır.
// Uygulama ilk açılışında componentlerin yüklenmesi yerine ilgili module gidilince yüklenmesini sağlayan performans amaçlı bir çözüm.

// app routing dosyasına canLoad olan guardlar tanımlanır. 
// uygulama içerisinde bir route tanımı yoksa app routing dosyasında en alt dizine ** path tanımlaması yaparak 404 page yönlendirelim. Not en altta tanımlanmalıdır.

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
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
