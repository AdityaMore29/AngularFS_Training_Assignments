import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { employee } from '../models/employee';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

EmpArr:any[]=[];

id:number=0;
EmpName:string = "";
Job:string = "";
Salary:number =0;
Dept:number = 0;

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {

this._dataService.getAllEmp().subscribe((res:any)=>{
  console.log(res);
this.EmpArr=res;
});
  }
getdata(){
  
this._dataService.getAllEmp().subscribe((res:any)=>{
  console.log(res);
this.EmpArr=res;
});
}

AddEmp(){
  let stObj:any = {};
  stObj.id = this.id;
  stObj.EmpName = this.EmpName;
  stObj.Job = this.Job;
  stObj.Salary = this.Salary;
  stObj.Dept = this.Dept;
  this._dataService.addEmp(stObj).subscribe( (resData:any) =>{
this.getdata();
  });
}


UpdateEmp(){
  let stObj:any = {};
  stObj.id = this.id;
  stObj.EmpName = this.EmpName;
  stObj.Job = this.Job;
  stObj.Salary = this.Salary;
  stObj.Dept = this.Dept;
  this._dataService.updateEmp(stObj).subscribe( (resData:any) =>{
this.getdata();
  });
}
EditData(empId:number, empName:string, sal:number, job:string, dept:number){
this.id=empId;
this.EmpName=empName;
this.Salary=sal;
this.Job=job;
this.Dept=dept;
}
RemoveEmp(){
  if(confirm("Do you want to delete this record")==true){
    this._dataService.deleteEmp(this.id).subscribe((res:any)=>{
      this.getdata();
    });
  }
  
}
  

}
