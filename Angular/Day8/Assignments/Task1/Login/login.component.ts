import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  route:Router) { }

  ngOnInit(): void {
  }

  LoginForm:FormGroup = new FormGroup({
    uname : new FormControl("", Validators.required),
    psw : new FormControl("", Validators.required),
  });


  onSubmit(){
    this.route.navigate(['/Categories']);
  }
}
