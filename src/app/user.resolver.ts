import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {

  // resolve methodu içerisinde api üzerinden veri çekip veriyi hazır hale getiriyoruz.



  constructor(private http:HttpClient) {}



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {


    // mock data test ile uğraşan arkadaşlar mock data ile çalışır fake data
    // of(new Observable())

    // buradaki bilgiye sayfadan nasıl erişeceğiz.
  
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }



}
