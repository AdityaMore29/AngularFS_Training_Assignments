import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cost-calculator',
  templateUrl: './cost-calculator.component.html',
  styleUrls: ['./cost-calculator.component.css']
})
export class CostCalculatorComponent implements OnInit {
UnitPrice:number=100;
TotalPrice:number=0;
Quantity:number=1;
result:string="";

  constructor() { }

  ngOnInit(): void {
  }
  CalculateCost(){
    if(this.Quantity !=null && this.Quantity>0){
      this.TotalPrice=this.UnitPrice*this.Quantity;
      this.result="Total Price is "+this.TotalPrice;
    }
    else{
      this.result="Please enter valid quantity";
    }
    
  }

}
