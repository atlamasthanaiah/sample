import { Component } from '@angular/core';
import { environment } from '../environments/environment'
@Component({
  selector: 'atla-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  environmentName:string = environment.envName;
  title = 'app';
  constructor(){
    console.log("environment name",environment.envName)
    console.log("environment api url",environment.MAIN_API_URL)

  }
}
