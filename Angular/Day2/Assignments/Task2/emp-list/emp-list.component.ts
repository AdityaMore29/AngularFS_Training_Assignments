import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { employee } from '../models/employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit, OnChanges {
@Input()
sortoption:string="";
EmpArrycopy:employee[]=[];
  EmpArr: employee[] = [
    { EmpId: 1, EmpName: "James", Salary: 15000, Job: "Manager", DeptNo: 1 },
    { EmpId: 2, EmpName: "Marie", Salary: 20000, Job: "Manager", DeptNo: 1 },
    { EmpId: 3, EmpName: "Rose", Salary: 30000, Job: "Developer", DeptNo: 1 },
    { EmpId: 4, EmpName: "Jeff", Salary: 40000, Job: "Developer", DeptNo: 1 },
    { EmpId: 5, EmpName: "Paul", Salary: 50000, Job: "QA", DeptNo: 3 },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.sortoption !=""){
      if(this.sortoption =="EmpNo"){
        alert("check in Emp-List");
        this.EmpArrycopy=this.EmpArr.sort(function(a,b){return a.EmpId < b.EmpId ? 1 :-1});
        this.EmpArr=this.EmpArrycopy;
      }
      else if(this.sortoption =="EmpName"){
        this.EmpArrycopy=this.EmpArr.sort(function(a,b){return a.EmpName < b.EmpName ? 1 :-1});
        this.EmpArr=this.EmpArrycopy;
      }
      
    }
  }

}
