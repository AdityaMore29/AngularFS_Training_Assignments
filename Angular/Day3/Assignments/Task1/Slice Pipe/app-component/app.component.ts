import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Project';
  prodCat:string= "category1";
  sortopt:string="";

  SendSortdata(sortdata:string){
    this.sortopt=sortdata;
    }
}


