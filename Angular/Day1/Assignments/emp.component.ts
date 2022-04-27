import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  public ID:number  = 62435;
  public name:string  = "scott";
  public job:string  = "Manager"
  public salary:number = 65000;
  public Depo:number=10;

}
