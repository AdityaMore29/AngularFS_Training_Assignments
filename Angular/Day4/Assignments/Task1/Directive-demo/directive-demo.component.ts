import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {
  displayMode:string  = "List";
  productArr: any[] = [
    { PId: 1, PName: "product1", Price: 100, Category: "category1", Qty: 4, imgpath: "/assets/prod1.png" },
    { PId: 2, PName: "product2", Price: 200, Category: "category3", Qty: 2, imgpath: "/assets/prod2.png" },
    { PId: 3, PName: "product3", Price: 300, Category: "category1", Qty: 4, imgpath: "/assets/prod3.jpg" },
    { PId: 4, PName: "product4", Price: 400, Category: "category7", Qty: 6, imgpath: "/assets/prod4.png" },
    { PId: 5, PName: "product5", Price: 500, Category: "category8", Qty: 8, imgpath: "/assets/prod5.png" },
  ];

  Change_view(viewmode:string){
    this.displayMode=viewmode;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
