import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
CategoryArr:any[]=[
  {Id:1,CatName:"Electronics"},
  {Id:2,CatName:"Skincare"},
  {Id:3,CatName:"Grocery"},
  {Id:4,CatName:"Home Appliances"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
