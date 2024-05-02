import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'atla-datefield',
  templateUrl: './datefield.component.html',
  styleUrls: ['./datefield.component.scss']
})
export class DatefieldComponent implements OnInit {

  public dateForm: FormGroup
  
  // this example is used to dynamic form control names 
  //  we can iterate data through forEach loop
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

  ngOnInit(): void {
    this.createDateForm();
  }

  createDateForm() {
    this.dateForm = this.fb.group({})

    this.fieldNames.forEach((fields) => {
      this.dateForm.addControl(fields, this.fb.control(''))
    })
  }

  saveForm() {
    const userData = this.dateForm.value;
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('User registered successfully!', userData);
  }

  getTranslatedFieldName(fields: string): string {
    return this.translate.instant(`DATES.${fields}`);
  }
}
