import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  baseUrl:string  = "http://localhost:3000/Emp/";

  constructor(private httpObj:HttpClient) { }

  public getAllEmp(): Observable<any>
  {   
    return this.httpObj.get(this.baseUrl);
  }
  

  //  Customizing the response using RxJS operators
  getEmpByJob(Job:string):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.Job == Job);
    })
    );
  }

  getEmpNames():Observable<string[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.map(item => { return item.name });
    })
    );
  }


  getEmpNameAndDesignation():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.map(item => {
          return { 	Name: item.EmpName, Designation : item.Job} });
    })
    );
  }
  getEmpNotinDept(dept:number):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.Dept != dept);
    })
    )
  }

  getSortedEmpData():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.sort((a,b) => a.Salary.localeCompare(b.Salary));
    })
    )
  }

  getManagerName(dept:number):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.Dept == dept).map(
          res=> {
            return{EmpName: res.EmpName}
          }
        );
    })
    )
  }
}
