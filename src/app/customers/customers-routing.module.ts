import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from '../user.resolver';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { 
    path: '', 
    component: CustomersComponent,
    data:{
      title:'Customer Page'
      // resolver veriyi çözüp buraki data alanı içerisine verinin hazır halini atıyor.
      // bu sebeple activated Route service üzerinden ilgili veriyi çekebiliriz.
      // this.activatedRoute.snapshot.data['users']
    },
    resolve:{ // componenti açmadan önce araya girip veriyi component için hazırlıyor
      users: UserResolver
      // veriye erişim ismim users olucak.
      // birden fazla resolver sayfaya veri taşıyabilir
    } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
