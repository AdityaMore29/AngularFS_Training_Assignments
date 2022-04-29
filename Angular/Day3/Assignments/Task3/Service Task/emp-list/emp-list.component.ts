import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { employee } from '../models/employee';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
@Input()
sortoption:string="";
param1:number=0;
param2:number=60000;
Fparam1:number=0;
Fparam2:number=0;
start:number=0;
end:number=4;

SrNo:number=0;
empGrade:number=0;
empName:string="";
EmpArr:any[]=[];

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
this.EmpArr=this._dataService.getEmp();
  }

AddEmp(){
  this._dataService.AddEmp({empID:this.SrNo,uname:this.empName,grade:this.empGrade});
}
RemoveEmp(){
  if(confirm("Do you want to delete this record")==true){
    this._dataService.RemoveEmp(this.SrNo);
  }
  
}
  

}
