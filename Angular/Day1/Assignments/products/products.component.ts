import { Component, OnInit } from '@angular/core';
import {product} from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  prodArray:product[]=[
    {PId:1, PName:"Prod1", Price:100, Category:"New", Qty:10},
    {PId:1, PName:"Prod2", Price:200, Category:"Latest", Qty:10},
    {PId:1, PName:"Prod3", Price:300, Category:"Old", Qty:10},
    {PId:1, PName:"Prod4", Price:400, Category:"New", Qty:10}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
