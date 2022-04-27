import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-amt',
  templateUrl: './calculate-amt.component.html',
  styleUrls: ['./calculate-amt.component.css']
})
export class CalculateAmtComponent implements OnInit {
  Prodname="";
  Price=0;
  Qty=0;
  Amt=0
  result:string="";
  calculatevalue(){
    this.Amt= this.Price*this.Qty;
    this.result="Total Amount is ";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
