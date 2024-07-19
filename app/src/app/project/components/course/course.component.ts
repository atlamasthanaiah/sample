import { Component, OnInit } from '@angular/core';
import { Message,Links } from 'src/app/shared/const/global/app.const';
import { FormBuilder,FormArray,FormGroup, Validators, MaxLengthValidator,ValidatorFn } from '@angular/forms';
import { CourseService } from '../service/course.service';
import { ActivatedRoute } from '@angular/router';
import { CountryList } from '../model/country.model';
import { dateLessThan } from '../validators/dateRangValidators';

@Component({
  selector: 'atla-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit{

  public courseForm : FormGroup;
  public _URLS : typeof Links = Links;
  public angular: boolean = false;
  public react: boolean = false;
  public data : any;
  public maxDate: string;  // future date disable using the these variable
  public pastDate: any =new Date() //to disable past date html code [min]="pastDate" or [min]="{{pastDate| dd-mm-yyyy}}"

  // countries variable declarations
  // public countries : CountryList;
  countries: any[] = [];
  public selectedCountry: string = '';
  public selectedState: string = '';
  public selectedCity: string = '';

  constructor( private http:CourseService ,private fb:FormBuilder){}
  ngOnInit(): void {
    this.getAllCountries();
    this.courseformDetails();
    // to disable future dates
    // const today = new Date;
    // this.maxDate = today.toISOString().split('T')[0];
    // this.futureDatesDisable();
    // [max]="maxDate"  use these  code in html <input type="date" [max]="maxDate" >
    
  }

  courseformDetails(){
    this.courseForm = this.fb.group({
      angularCourseStartDate: ['', Validators.required],
      angularCourseEndDate: ['', Validators.required],
      duration : ['', Validators.required],
      time : ['', Validators.required]
      
    })
  }

  getData(){
    console.log("course details",this.courseForm)
  }

// ,{Validators:dateLessThan('angularCourseStartDate','angularCourseEndDate')}
  
  /* weekoff filter(saturday and sunday will be leave) */
  // weekFilter = date =>{
  //   const day = date.getDay();
  //   return day !=0 && day !=6;
  // }
  weekFilter = date => {
    // Check if 'date' is null or undefined
    if (!date) {
      // Return false to indicate that the date is not valid
      return false;
    }
  
    // Continue with the rest of the logic
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
 
  /*  todisable future date follw below code*/
  // futureDatesDisable(){
  //   const today = new Date;
  //   this.maxDate = today.toISOString().split('T')[0]
  // }
   

  /* displaying the all employee  data */
  getEmployeData(){
    this.http.getEmpInfo().subscribe({
      next:(res:any) => {
        this.data = res;
      }
    })
  }

    /*based on dropdown selection displaying the data  */
  show($event) {
    let courseDetails = $event.value;
    console.log($event.value);
    if (courseDetails == 1) {
      this.angular = true;
      this.react = false;
    }
    else if (courseDetails == 2) {
      this.react = true;
      this.angular = false;
    }
    // else {
    //   this.urban = false;
    //   this.rural = false;
    // }
  }

  /*  */
  getAllCountries(){
    this.http.getCountries().subscribe({
      next:(res:any) => {
        this.countries = res;
      }
    })
  }

  // getting state for countries
  /*  */
  getStateOptions(): string[] {
    const countryData = this.countries.find(c => c.country === this.selectedCountry);
    return countryData ? countryData.states.map(s => s.state) : [];
    // explanation
    // we can declare the variable called countryData and this.countries contains all countries. 
    // c.country is variable dot key name(country [json key= country])
    // selectedCountry holding the selected country 
    // countryData.states holding states and cities
    //  states.map(s => s.state)  
  }

  // getting for all cities data
  getCityOptions(): string[] {
    const countryData = this.countries.find(c => c.country === this.selectedCountry);
    const stateData = countryData ? countryData.states.find(s => s.state === this.selectedState) : null;
    return stateData ? stateData.cities : [];
  }
}
