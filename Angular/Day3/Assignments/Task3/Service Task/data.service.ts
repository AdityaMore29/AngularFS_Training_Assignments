import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataArray:any[] = [
    {empID:1,uname  :  "Smith",  grade:  1},
    {empID:2,uname  :  "Scott",  grade:  2},
    {empID:3,uname  :  "Nancy",  grade:  3},
    {empID:4,uname  :  "Ruth",  grade:  4},
    {empID:5,uname  :  "James",  grade:  2},
    {empID:6,uname  :  "Adam",  grade:  3},
    {empID:7,uname  :  "Mikel",  grade:  4},
  ];
getEmp(){
  return this.dataArray;
}
  AddEmp(empObj:any){
    
    this.dataArray.push(empObj);
  }
  RemoveEmp(eno:number){
    let index:number=this.dataArray.findIndex(object => {
      return object.empID == eno;
    });
    
this.dataArray.splice(index,1);
  }
  constructor() { }
}
