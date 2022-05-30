import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
import { IMenu } from './_models/menu.model';
import { ILanguage } from './_models/languale.model';
import { Helper } from './_services/helper';
import { Language } from './_enums/language.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        overflow: 'hidden',
        height: '*'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        width: '0px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class AppComponent implements OnInit {

  // VARIABLES
  showScroll: boolean;
  showScrollHeight: number = 300;
  hideScrollHeight: number = 10;

  year: number;
  menuOpened: string = 'out';

  languages: ILanguage[] = [
    { id: Language.AL, value: 'Shqip', isActive: true },
    { id: Language.MK, value: 'Македонски', isActive: false },
    { id: Language.EN, value: 'English', isActive: false }
  ]

  menuList: IMenu[] = [{
    id: 1,
    path: '/home',
    icon: 'fa fa-home',
    name: 'Home'
  }, {
    id: 2,
    path: '/gallery',
    icon: 'far fa-images',
    name: 'Gallery'
  }, {
    id: 3,
    path: '/catalogue',
    icon: 'fas fa-book',
    name: 'Catalogue'
  }, {
    id: 4,
    path: '/contact',
    icon: 'fa fa-phone',
    name: 'Contact'
  }];

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    const language = localStorage.getItem('language');

    if (
      !language ||
      language === Language.AL ||
      language === Language.MK ||
      language === Language.EN
    ) {
      localStorage.clear();
      localStorage.setItem('language', JSON.stringify(this.languages));
      location.reload();
    }
    else {
      this.languages = JSON.parse(localStorage.getItem('language'));
    }

    const langId = this.languages.find(x => x.isActive)?.id;

    this.translate.use(langId);
    this.year = new Date().getFullYear();
  }

  // TOGGLE MENU
  toggleMenu() {
    this.menuOpened = this.menuOpened === 'out' ? 'in' : 'out';
  }

  // CHANGE LANGUAGE
  changeLanguage(language: string) {
    const lang: ILanguage = JSON.parse(language);

    this.languages.forEach(x => {
      if (x.id === lang.id)
        x.isActive = true;
      else
        x.isActive = false;
    })

    localStorage.setItem('language', JSON.stringify(this.languages));

    this.translate.use(lang.id);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
    }
    else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }

  scrollToTop() {
    Helper.scrollToTop();
  }
}
