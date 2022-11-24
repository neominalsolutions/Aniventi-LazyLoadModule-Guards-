import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccessdeniedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // Root Module



// Uygulamanın düzgün çalışması için localStorage'a aşağıdaki değerleri ekleyelim
// key:permissions
// value:['customers','admin','ik','orders','order-detail-read']

// Guard: Sayfalar arası geçişlerde araya girip belirli kontroller sonucunda ilgili module yada component'in doma yansımasını sağlayan bir ara service
// her bir yönlendirme isteğinde guard service devreye girer.