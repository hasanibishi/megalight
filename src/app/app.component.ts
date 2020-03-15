import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // VARIABLES
  DatetimeNow: Date = new Date();
  Year: number;

  SelectedMenu = 1;
  MenuList: any[] = [{
    ID: 1,
    Name: '/home',
    Icon: 'fa fa-home',
    TranslatedName: 'Home'
  }, {
    ID: 2,
    Name: '/gallery',
    Icon: 'fa fa-image',
    TranslatedName: 'Gallery'
  }, {
    ID: 3,
    Name: '/catalogue',
    Icon: 'fa fa-book',
    TranslatedName: 'Catalogue'
  }, {
    ID: 4,
    Name: '/contact',
    Icon: 'fa fa-phone',
    TranslatedName: 'Contact'
  }];

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('al');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    const language: string = localStorage.getItem('language');
    this.translate.use(language);

    this.Year = this.DatetimeNow.getFullYear();
  }

  changeLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }
}
