import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { employee } from '../models/employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent  {
start:number=0;
end:number=4;
EmpArrycopy:employee[]=[];
  EmpArr: employee[] = [
    { EmpId: 1, EmpName: "James", Salary: 15000, Job: "Manager", DeptNo: 1 },
    { EmpId: 2, EmpName: "Marie", Salary: 20000, Job: "Manager", DeptNo: 1 },
    { EmpId: 3, EmpName: "Rose", Salary: 30000, Job: "Developer", DeptNo: 1 },
    { EmpId: 4, EmpName: "Jeff", Salary: 40000, Job: "Developer", DeptNo: 1 },
    { EmpId: 5, EmpName: "Paul", Salary: 50000, Job: "QA", DeptNo: 3 },
    { EmpId: 6, EmpName: "James", Salary: 15000, Job: "Manager", DeptNo: 1 },
    { EmpId: 7, EmpName: "Marie", Salary: 20000, Job: "Manager", DeptNo: 1 },
    { EmpId: 8, EmpName: "Rose", Salary: 30000, Job: "Developer", DeptNo: 1 },
    { EmpId: 9, EmpName: "Jeff", Salary: 40000, Job: "Developer", DeptNo: 1 },
    { EmpId: 10, EmpName: "Paul", Salary: 50000, Job: "QA", DeptNo: 3 },
    { EmpId: 11, EmpName: "James", Salary: 15000, Job: "Manager", DeptNo: 1 },
    { EmpId: 12, EmpName: "Marie", Salary: 20000, Job: "Manager", DeptNo: 1 },
    { EmpId: 13, EmpName: "Rose", Salary: 30000, Job: "Developer", DeptNo: 1 },
    { EmpId: 14, EmpName: "Jeff", Salary: 40000, Job: "Developer", DeptNo: 1 },
    { EmpId: 15, EmpName: "Paul", Salary: 50000, Job: "QA", DeptNo: 3 },
  ];
  constructor() { }

  

  click_load(){
if(this.end< this.EmpArr.length)
{
  this.end=this.end+4;
}
    
  }

}
