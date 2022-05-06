import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  constructor() { }
  VehicleForm: FormGroup = new FormGroup({
    FullName: new FormControl("",Validators.required),
    ContactNo: new FormControl("",[Validators.required, Validators.pattern("\\d{10}")]),
    Email: new FormControl("",[Validators.required,Validators.email]),
    RegNo: new FormControl("", Validators.pattern("^[a-zA-Z0-9]{10}$")),
    Address: new FormControl("",Validators.required),
    Model: new FormControl("",[Validators.minLength(10),Validators.maxLength(10)]),
    Color: new FormControl("",Validators.required),
    Year: new FormControl("",[Validators.min(2012), Validators.max(2022)])
  })

  ngOnInit(): void {
  }
  submit_click(){
    alert('data saved');
  }
}
