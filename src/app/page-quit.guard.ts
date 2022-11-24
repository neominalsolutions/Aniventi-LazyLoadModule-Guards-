import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailComponent } from './orders/detail/detail.component';
import { InvoicesComponent } from './orders/invoices/invoices.component';

// componentten çıkmak istediğimizde devreye girer. Bir işlem yapıp çıkmamız gerektiği durumlarda veya componentten ayrılmadan önce confirm mesaj ile teyit amaçı çıkışlar tercih edilir. Route ile bir componenten başka bir componente yönlenirken devreye girer. Genelde formdaki kayıt işlemini yapmadan devam etme tarzı durumlarda kullanılır.


@Injectable({
  providedIn: 'root'
})
export class PageQuitGuard implements CanDeactivate<any> {
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('component', component);
      console.log('currentRoute', currentRoute);
      console.log('currentState', currentState);
      console.log('nextState', nextState);

    //   if(component?.formValid){
    //     return true;
    //   }

    //  return true;



      // componentten çıkıp çıkmayacağımızı ayrılıp ayrılamayacağımızın kararını vermek için bu servis üzerinden kontrol yapacaktır.

    return  confirm('Sayfadan ayrılmak istediğinize emin misiniz');
  }
  
}
