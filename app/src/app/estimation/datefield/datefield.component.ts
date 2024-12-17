import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DateService } from 'src/app/shared/service/date.service';

@Component({
  selector: 'atla-datefield',
  templateUrl: './datefield.component.html',
  styleUrls: ['./datefield.component.scss']
})
export class DatefieldComponent implements OnInit {

  public dateForm: FormGroup
  
  constructor( private fb: FormBuilder, private translate: TranslateService ) { }
  
  fieldNames = [
    'Startdate',
    'EndDate',
    'DateOfBirth',
    'CF',
    'CA',
    'MF',
    'MA',
    'dateField8',
    'dateField9',
    'dateField10',
    'dateField11',
    'dateField12',
    'dateField13',
    // Add the rest of your field names here
    'dateField19'
  ];

  /* angular life cycle.  */
  ngOnInit(): void {
    this.createDateForm();
  }

  /* iterating the all date input fielld with help of form builder */
  createDateForm() {
    this.dateForm = this.fb.group({});
    this.fieldNames.forEach((field) => {
      this.dateForm.addControl(
        field,
        this.fb.control('')
      );
    });
  }
  
  /* after saving the data to see in console (example of local storage) */
  saveForm() {
    const userData = this.dateForm.value;
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('User registered successfully!', userData);
  }

  // getTranslatedFieldName(fieldName: string): string {
  //   return this.translate.instant(`DATES.${fieldName}`);
  // }
}
