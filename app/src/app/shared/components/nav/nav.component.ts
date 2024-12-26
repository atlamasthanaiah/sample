import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'atla-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // public envName: string | undefined;
  public environmentName:string | undefined= environment.envName;


  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'fr','tl']);
    translate.setDefaultLang('en');
  }
  
  ngOnInit(): void {
    console.log("environment name",environment.envName)
    console.log("environment api url",environment.MAIN_API_URL)
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
