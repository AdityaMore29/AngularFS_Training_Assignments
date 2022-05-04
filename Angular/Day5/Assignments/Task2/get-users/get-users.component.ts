import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  resObj:any;
  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {
  }

  getuserdata(){
   let url:string="https://reqres.in/api/users"
    this.httpclient.get(url).subscribe(data => {
      this.resObj = data;

      console.log(data);



    })
  }

}
