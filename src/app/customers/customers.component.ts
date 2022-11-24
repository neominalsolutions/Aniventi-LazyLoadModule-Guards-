import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  users:any[] = [];
  users$!:Observable<any[]>;
  title!:string;

  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {

    // senkron çalışıyor.
    // activatedRoute params queryParams dinamik route değerlerine erişebiliriz.
    // yada aktif yönlenen path url bilgisine erişebilir
    // developer defined data gönderip alma örneğide yaptık.
    this.users = this.activatedRoute.snapshot.data['users'];
    this.title = this.activatedRoute.snapshot.data['title'];

    console.log('users from resolver', this.users);

    // async çalışıyor
    // sayfa yüklenirken modeli sayfaya basıyor elementler sayfa yüklenirken oluşuyor.
   this.users$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
  

  }

}
