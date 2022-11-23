import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailComponent } from './orders/detail/detail.component';
import { InvoicesComponent } from './orders/invoices/invoices.component';

@Injectable({
  providedIn: 'root'
})
export class DetailPageQuitGuard implements CanDeactivate<DetailComponent> {
  canDeactivate(
    component: DetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // componentten çıkıp çıkmayacağımızı ayrılıp ayrılamayacağımızın kararını vermek için bu servis üzerinden kontrol yapacaktır.

      console.log('component.result', component.result)


      if(component.result)
        return true;
      else
        return false;
  }
  
}
