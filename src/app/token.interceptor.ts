import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { delay, Observable, tap } from 'rxjs';


// her request de devreye girer.

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log('request', request);


    // Basic Auth Token 
    // Bearer Authentication Access Token
    // Refresh Token Access Token expire olduğunda yeni accesstoken üretmek içinb kullanılan bir jeton.

    let h:HttpHeaders = new HttpHeaders();
    h = h.append('Authorization','Bearer xeteytryryYiusd.sadsadsadYU.09iiertretuoppp');

    // SPA uygulamalarda login olduktan sonra gelen access token bilgisini localStorage yada sessionStroge gibi yapılarda tutup, token interceptor ile access token bilgisini request headerdan yollayabiliriz. Bunu yapmazsak apidan 401 unauthorized hatası döner. 


    let req = request.clone({headers:h});

    // request header içerisine bir data ekleyip bu req göndermeye devam et


    // request ile gelen web istediği yakalanıyor burada web isteği ile ilgili operasyonla yapabiliriz.
    // next ile bir sonraki middleware süreç aktarılıyor yani süreç devam ediyor.

    // Interceptorler uygulama genelinde çalışır. bu sebebple genelde tüm uygulamayı ilgilendiren bir süreç olduğu app module tanımlanır.

    return next.handle(req);
  }
}
