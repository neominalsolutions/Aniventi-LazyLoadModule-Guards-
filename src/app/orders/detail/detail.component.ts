import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  result= false;

  constructor() { }

  ngOnInit(): void {
  }

  SaveAndClose(){
    this.result = confirm('Bu Sayfadan çıkmak istediğinize emin misiniz');

    if(this.result){
      window.close()
    }
  }

}
