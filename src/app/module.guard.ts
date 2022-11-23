import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleGuard implements CanLoad {


  constructor(private router:Router) {

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // her istek de buraya düşüp true yada false olma durumuna göre module yüklenmesi sağlanacak.

     let permissions = localStorage.getItem('permissions');
     let result =  false;

     if(permissions != undefined)
        result = permissions.includes(route.path as string);
    
    // eğer module yetkim yok ise yetki yok sayfasına yönlendirme yaptık
    if(!result){
      this.router.navigate(['access-denied']);
    }

    return result;
  }
}
