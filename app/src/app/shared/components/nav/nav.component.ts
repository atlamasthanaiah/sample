import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'atla-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public envName: string | undefined;

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'fr','tl']);
    translate.setDefaultLang('en');
  }
  
  ngOnInit(): void {
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
