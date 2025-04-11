import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { NonmagicNumber, Roles } from 'src/app/shared/const/global/app.const';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { CanComponentDeactivate } from '../../shared/service/prevent-data-loosing.guard'
import { ConfirmationService } from '../service/confirmation.service';
import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs';
// import { PreventDataLoosingGuard } from '../../shared/service/prevent-data-loosing.guard' 

@Component({
  selector: 'atla-stdregistration',
  templateUrl: './stdregistration.component.html',
  styleUrls: ['./stdregistration.component.scss']
})
export class StdregistrationComponent implements OnInit,CanComponentDeactivate {

  public studentForm: FormGroup;
  public formSubmitted = false;
  public urban: boolean = false;
  public rural: boolean = false;
  public pinvalue = "^((\\+91-?)|0)?[0-9]{6}$";
  public mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  public charactutePattern = /^[A-Za-z]+$/;

  constructor(private _fb: FormBuilder, private route: Router, private _sankebar: NotificationService,private confirmationService: ConfirmationService) { }
  // canDeactivate: () => boolean | Observable<boolean>;

  ngOnInit() {
    this.saveStudentForm();
    // this.
  }

  saveStudentForm() {
    // if (Roles === "Administrator"){

    // }
    // if(Roles === Roles.Fundamental){}
    this.studentForm = this._fb.group({
      
      firstName: ['', [Validators.required, Validators.maxLength(NonmagicNumber.EHIGHT), Validators.pattern(this.charactutePattern)]],
      lastName: ['', [Validators.required, Validators.maxLength(NonmagicNumber.TWENTY), Validators.pattern(this.charactutePattern)]],
      gender : [],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(this.mobNumberPattern)]],
      country: [''],
      municipality: [''],
      ward: [''],
      block: [''],
      village: [''],
      locality: [''],
      street: [''],
      pincode: ['', [Validators.required, Validators.pattern(this.pinvalue)]],
      city: [],
      ruralorurban: []
    })
    console.log("getting reg form data",this.studentForm.value)
  }

  show($event) {
    let urbanshow = $event.value;
    console.log($event.value);
    if (urbanshow == 1) {
      this.urban = true;
      this.rural = false;
      this.saveStudentForm['ruralorurban'].controls.setValidators([Validators.required]);
      this.saveStudentForm['ruralorurban'].controls.updateValueAndValidity([Validators.required]);
      // this.outsideUPForm.controls['headOfficeMuncipalarea'].setValidators([Validators.required]);
      // this.outsideUPForm.controls['headOfficeMuncipalarea'].updateValueAndValidity();
    }
    else if (urbanshow == 2) {
      this.rural = true;
      this.urban = false;
    }
    // else {
    //   this.urban = false;
    //   this.rural = false;
    // }
  }

  resetForm() {
    this.studentForm.reset();
  }

  navigationLink(link: string) {
    this.route.navigate([link])
  }

  canExit(): boolean {  // the example is to prevent the data loosing (with help of canDeactive guard we can prevent hte data loosing)

    if (this.studentForm.dirty) {
      //  Swal.fire('Are you want leave this page!')  this used for sweet alert message
      return window.confirm("Are you want leave this page!");
      // return this._sankebar.openSnackBar(Message.CANDEACTIVE_SCREEN_CONFIRMATION,Message.CANDEACTIVE_SCREEN_CONFIRMATION);
    }
    return true
  }
  /// get registration form details. what data enter user for registration
  getData(){
    // this.studentForm.value()
    console.log("getting reg form data",this.studentForm.value)
    //output
    //getting reg form data {firstName: 'atla', lastName: 'masthanaiah', gender: null, email: '', phone: '', …}block: ""city: nullcountry: ""email: ""firstName: "atla"gender: nulllastName: "masthanaiah"locality: ""municipality: ""phone: ""pincode: ""ruralorurban: nullstreet: ""village: ""ward: ""[[Prototype]]: Object           
  }

  /* to prevent the data loosing  */
  canDeactivate(): Observable<boolean> | boolean {
    if (this.studentForm.dirty) {
      return this.confirmationService.confirm(
        'You have unsaved changes. Do you really want to leave?',
        'Unsaved Changes',
        'Leave',
        'Stay'
      );
    }
    return true;
  }
  //   if (this.studentForm.dirty) {
  //     return confirm('You have unsaved changes. Do you really want to leave?');
  //   }
  //   return true;
  // }
}
