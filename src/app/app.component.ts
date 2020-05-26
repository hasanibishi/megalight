import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { animate, style, transition, trigger, state } from "@angular/animations";

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
export class AppComponent {
  
  // VARIABLES
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  DatetimeNow: Date = new Date();
  Year: number;
  selectedLanguage: string;
  MenuOpened = 'out';

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
    this.selectedLanguage = localStorage.getItem('language') !== null && localStorage.getItem('language') !== undefined ? localStorage.getItem('language') : 'al';
    localStorage.setItem('language', this.selectedLanguage);
    this.translate.use(this.selectedLanguage);

    this.Year = this.DatetimeNow.getFullYear();
  }

  // TOGGLE MENU
  toggleMenu() {
    this.MenuOpened = this.MenuOpened === 'out' ? 'in' : 'out';;
  }

  // CHANGE LANGUAGE
  changeLanguage(language: string) {
    this.selectedLanguage = language;
    localStorage.setItem('language', language);
    this.translate.use(language);
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
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }
}
