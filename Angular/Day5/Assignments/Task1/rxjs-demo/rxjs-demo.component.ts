import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 newTask:string="";
 updatetaskId:number=0;
 
  taskArr:any[]=[
    {TId:1, TName:"Learn ReactJS basics",IsDone:false},
    {TId:2, TName:"Practice ReactJS",IsDone:false},
    {TId:3, TName:"Learn Redux",IsDone:false},
    {TId:4, TName:"Code Porfolio in React",IsDone:false},
    {TId:5, TName:"Learn React Native",IsDone:false}
  ]

  saveTask(){
    let observableObj = new Observable( (subscriber) => {

      if(this.newTask!=""){
        subscriber.next(this.newTask);
      }
        else{
            subscriber.error("Error Occurred while processing observable");
      }
    });

    observableObj.subscribe(
      {
         next  :  (resData:any) =>  { 
            
           this.taskArr.push({TId:this.taskArr.length,TName:resData});
            },
         error  : (errorData:any) =>  { console.log("Error Handled by code : " + errorData); },
      }
     );
 
  }

  removeDoneTasks(){
     this.taskArr= this.taskArr.filter(x => x.IsDone==false)
  }

  removeAllTasks(){
    this.taskArr= [];
 }

 editName(name:string,id:number){
this.newTask=name;
this.updatetaskId=id;
 }

 updateTask(){
   let num=this.taskArr.findIndex(x=> x.TId==this.updatetaskId);
   this.taskArr[num].TName=this.newTask;
 }
}
