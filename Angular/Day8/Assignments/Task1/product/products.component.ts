import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prodArray:any[]=[
    {PId:1, PName:"Mobile", Price:10000, Category:1, Qty:10},
    {PId:2, PName:"Laptop", Price:50000, Category:1, Qty:10},
    {PId:3, PName:"Face Wash", Price:300, Category:2, Qty:10},
    {PId:4, PName:"Moisturizer", Price:400, Category:2, Qty:10},
    {PId:5, PName:"Vegetables", Price:200, Category:3, Qty:10},
    {PId:6, PName:"Fruits", Price:100, Category:3, Qty:10},
    {PId:7, PName:"AC", Price:35000, Category:4, Qty:10},
    {PId:8, PName:"TV", Price:20000, Category:4, Qty:10}
  ];
  prodarr1:any[]=[];
  constructor(private  route:ActivatedRoute) { }

  ngOnInit(): void {
    let selectedCategory  =this.route.snapshot.params["id"];
    this.prodarr1 = this.prodArray.filter(item => item.Category == selectedCategory);
  }

}
