import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailComponent } from './orders/detail/detail.component';
import { InvoicesComponent } from './orders/invoices/invoices.component';

@Injectable({
  providedIn: 'root'
})
export class PageQuitGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // componentten çıkıp çıkmayacağımızı ayrılıp ayrılamayacağımızın kararını vermek için bu servis üzerinden kontrol yapacaktır.

    return  confirm('Sayfadan ayrılmak istediğinize emin misiniz');
  }
  
}
