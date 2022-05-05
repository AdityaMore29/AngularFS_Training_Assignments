import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  // AddEmp(empObj:any){
    
  //   this.dataArray.push(empObj);
  // }
  RemoveEmp(eno:number){
    let index:number=this.dataArray.findIndex(object => {
      return object.empID == eno;
    });
    
this.dataArray.splice(index,1);
  }
  constructor(private httpObj:HttpClient) { }

    // baseUrl:string  = "https://localhost:44307/api/StudentApi/";
    baseUrl:string  = "http://localhost:3000/Emp/";
  
    // Read All
    public getAllEmp(): Observable<any>
    {   
      return this.httpObj.get(this.baseUrl);
    }
  
    // Read Single
    public getStudentById(sid:number):any
    {
      return this.httpObj.get(this.baseUrl + sid);
    }
  
    // Create
    public addEmp(stObj:any):any
    {
      alert("call");
      return this.httpObj.post(this.baseUrl, stObj);
    }
  
    // Update
    public updateEmp(stObj:any):any
    {
      return this.httpObj.put(this.baseUrl + stObj.id, stObj);
      // return this.httpObj.put(this.baseUrl, stObj);
    }
  
  
    // Delete
    public deleteEmp(id:number):any
    {
      return this.httpObj.delete(this.baseUrl + id);
    }
}
