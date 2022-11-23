import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {


  result:boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  SaveAndClose(){
    this.result = confirm('Bu Sayfadan çıkmak istediğinize emin misiniz')
  }

}
