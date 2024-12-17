import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, NonmagicNumber } from '../../shared/const/global/app.const'
import { NotificationService } from 'src/app/shared/service/notification.service';
@Component({
  selector: 'atla-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  public signinForm: FormGroup;
  public pinvalue = "^((\\+91-?)|0)?[0-9]{6}$";
  public mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  public charactutePattern = /^[A-Za-z]+$/;
  public hide = true;
  public signinUser: any[] = []; // Initialize as an empty array

  constructor(private _route: Router, private _fb: FormBuilder,private _notificationService: NotificationService) { }

  ngOnInit(): void {
    this.initializeForm(); // Call the method to initialize the form
  }

  initializeForm() {
    this.signinForm = this._fb.group({
      // firstName: ['',[Validators.required, Validators.maxLength(NonmagicNumber.FIVE),Validators.pattern(this.charactutePattern)]],
      name: ['',[Validators.required, Validators.maxLength(NonmagicNumber.TWENTIFIVE),Validators.pattern(this.charactutePattern)]],
      email: ['',[Validators.required, Validators.email]],
      userName: ['',Validators.required],
      password: ['',[Validators.required, Validators.minLength(NonmagicNumber.SIX)]],
      phone: ['',[Validators.required, Validators.pattern(this.mobNumberPattern)]]
    });
  }

  navigations(link: string) {
    this._route.navigate([link]);
  }

  signinData() {
    const userData = this.signinForm.value;
      localStorage.setItem('userData', JSON.stringify(userData));
      console.log('User registered successfully!', userData);
      this._notificationService.openSnackBar(Message.SININ_SUCESS_KEY,Message.SININ_SUCESS_KEY)
      this.signinForm.reset();
    // this.signinUser.push(this.signinObj);
    // localStorage.setItem('signinuser', JSON.stringify(this.signinUser));
  }
}
