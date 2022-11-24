import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  
 public formValid = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  SaveAndClose(){
    this.router.navigateByUrl('/');
  }

}
