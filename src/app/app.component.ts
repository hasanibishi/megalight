import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  // VARIABLES
  DatetimeNow: Date = new Date();
  Year: number;
  showMenu = false;

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
    localStorage.setItem('language', 'al');
    const language: string = localStorage.getItem('language');
    this.translate.use(language);

    this.Year = this.DatetimeNow.getFullYear();
  }

  // TOGGLE MENU
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  // CHANGE LANGUAGE
  changeLanguage(language: string) {
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
