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
  showMenu = false;

  SelectedMenu: number;

  MenuList: any[] = [{
    ID: 1,
    Name: '/home',
    Icon: 'fa fa-home',
    TranslatedName: 'Home'
  }, {
    ID: 2,
    Name: '/gallery',
    Icon: 'far fa-images',
    TranslatedName: 'Gallery'
  }, {
    ID: 3,
    Name: '/catalogue',
    Icon: 'fas fa-book',
    TranslatedName: 'Catalogue'
  }, {
    ID: 4,
    Name: '/contact',
    Icon: 'fa fa-phone',
    TranslatedName: 'Contact'
  }];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('al');
    const language: string = localStorage.getItem('language');
    this.translate.use(language);

    this.SelectedMenu = Number(localStorage.getItem("SelectedMenu"));
    this.Year = this.DatetimeNow.getFullYear();
  }

  // TOGGLE MENU
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  changeMenu(menu) {
    localStorage.setItem("SelectedMenu", menu.ID);
    this.SelectedMenu = menu.ID
  }

  // CHANGE LANGUAGE
  changeLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }
}
