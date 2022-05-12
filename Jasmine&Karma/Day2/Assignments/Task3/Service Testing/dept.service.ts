import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeptService {
  dataArray:any[] = [
    {ID:1,name  :  "Accounts"},
    {ID:2,name  :  "HR"},
    {ID:3,name  :  "Finance"},
    {ID:4,name  :  "Operations"},
    {ID:5,name  :  "IT"}
  ];
  constructor() { }

  AddDept(DeptObj:any){
    
      this.dataArray.push(DeptObj);
      return this.dataArray.length;
    }

  RemoveDept(eno:number){
    let index:number=this.dataArray.findIndex(object => {
      return object.ID == eno;
    });
    
this.dataArray.splice(index,1);
return this.dataArray.length;
  }


}
