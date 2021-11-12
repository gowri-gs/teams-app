import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userDetails : FormGroup;
  username = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',Validators.required)
  usernameInvalid : Boolean = false;
  passwordInvalid : Boolean = false;
  constructor() { 
     this.userDetails = new FormGroup({
       'username' : new FormControl('',[Validators.required,Validators.email]),
       'password' : new FormControl('',Validators.required)
     })
  }

  ngOnInit(): void {
  }
  login(){
    if(this.userDetails.get('username')?.status=="INVALID"){
      this.usernameInvalid=true;
    }
    else if(this.userDetails.get('password')?.status=="INVALID"){
      this.passwordInvalid=true;
    }
  }

}
