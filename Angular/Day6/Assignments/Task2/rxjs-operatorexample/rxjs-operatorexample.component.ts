import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-rxjs-operatorexample',
  templateUrl: './rxjs-operatorexample.component.html',
  styleUrls: ['./rxjs-operatorexample.component.css']
})
export class RxjsOperatorexampleComponent implements OnInit {

  constructor(private _newService:NewserviceService) { }
  result: any[] = [];
  empJob:string="";
  ngOnInit(): void {
  }
  getAlldata(){
  
    this._newService.getAllEmp().subscribe((res:any)=>{
      console.log(res);
    this.result=res;
    });
    }
  getdata(){
  
    this._newService.getEmpByJob(this.empJob).subscribe((res:any)=>{
      console.log(res);
    this.result=res;
    });
    }

    getEmpNamedesignation(){
  
      this._newService.getEmpNameAndDesignation().subscribe((res:any)=>{
        console.log(res);
      this.result=res;
      });
      }

      getEmpNotinDept(){
  
        this._newService.getEmpNotinDept(10).subscribe((res:any)=>{
          console.log(res);
        this.result=res;
        });
        }

        getSortedEployeedata(){
  
          this._newService.getSortedEmpData().subscribe((res:any)=>{
            console.log(res);
          this.result=res;
          });
          }

          getManagerName(){
  
            this._newService.getManagerName(14).subscribe((res:any)=>{
              console.log(res);
            this.result=res;
            });
            }
}
