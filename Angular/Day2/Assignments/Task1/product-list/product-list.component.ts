import { Component, OnInit, Input } from '@angular/core';
import { product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  {


  @Input()
  category:string='';
  ProdArr1:product[]=[];
  productArr: product[] = [
    { PId: 1, PName: "product1", Price: 100, Category: "category1", Qty: 4 },
    { PId: 2, PName: "product2", Price: 200, Category: "category3", Qty: 2 },
    { PId: 3, PName: "product3", Price: 300, Category: "category1", Qty: 4 },
    { PId: 4, PName: "product4", Price: 400, Category: "category7", Qty: 6 },
    { PId: 5, PName: "product5", Price: 500, Category: "category8", Qty: 8 },
  ];

  
 ngOnInit(): void {  
  this.ProdArr1=this.productArr.filter(item=>item.Category == this.category);
  
 }
  

  
}
