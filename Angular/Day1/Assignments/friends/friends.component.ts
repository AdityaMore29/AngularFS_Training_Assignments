import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsArray:string[]=["Raj","Sagar","Jeff", "Sandy"];
  constructor() { }

  ngOnInit(): void {
  }

}
