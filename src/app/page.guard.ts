import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageGuard implements CanActivate {


  constructor(private router:Router) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('route.data[permission]', route.data['permission'])

      let permissions = localStorage.getItem('permissions');

      if(permissions?.includes(route.data['permission'])){
        return true;
      }


      this.router.navigate(['access-denied']);
      

    return false;
  }
  
}
