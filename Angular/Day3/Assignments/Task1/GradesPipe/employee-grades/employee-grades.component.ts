import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-grades',
  templateUrl: './employee-grades.component.html',
  styleUrls: ['./employee-grades.component.css']
})
export class EmployeeGradesComponent implements OnInit {

  public EmpArray:any[]  =
  [
    {empID:1,uname  :  "Smith",  grade:  1},
    {empID:2,uname  :  "Scott",  grade:  2},
    {empID:3,uname  :  "Nancy",  grade:  3},
    {empID:4,uname  :  "Ruth",  grade:  4},
    {empID:5,uname  :  "James",  grade:  2},
    {empID:6,uname  :  "Adam",  grade:  3},
    {empID:7,uname  :  "Mikel",  grade:  4},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
