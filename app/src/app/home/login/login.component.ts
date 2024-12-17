import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'atla-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;
  public hide = true;
  // loginObj={
  //   userName: "",
  //   password: ""
  // }
  constructor( private _route:Router, private _fb:FormBuilder ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  navigations( link : string){
    this._route.navigate([link])
  }

  createLoginForm(){
    this.loginForm = this._fb.group({
      userName : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  login(){
    const loginData = this.loginForm.value;
    localStorage.getItem('',)
  }
}

