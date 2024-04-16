import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'atla-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide = true;
  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

  navigations( link : string){
    this._route.navigate([link])
  }

  navigateToSignIn() {
    this._route.navigate(['/signin']);
  }
}
