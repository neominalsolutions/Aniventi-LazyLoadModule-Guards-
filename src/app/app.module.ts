import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessdeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // Root Module


// Guard: Sayfalar arası geçişlerde araya girip belirli kontroller sonucunda ilgili module yada component'in doma yansımasını sağlayan bir ara service
// her bir yönlendirme isteğinde guard service devreye girer.