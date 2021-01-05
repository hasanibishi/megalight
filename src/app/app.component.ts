import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
import { of } from 'rxjs';

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
  showScrollHeight = 300;
  hideScrollHeight = 10;

  year: number;
  menuOpened = 'out';

  languages = [
    { id: 'al', value: 'Shqip', isActive: true },
    { id: 'mk', value: 'Македонски', isActive: false },
    { id: 'en', value: 'English', isActive: false }
  ]

  menuList$ = of([{
    id: 1,
    root: '/home',
    icon: 'fa fa-home',
    name: 'Home'
  }, {
    id: 2,
    root: '/gallery',
    icon: 'far fa-images',
    name: 'Gallery'
  }, {
    id: 3,
    root: '/catalogue',
    icon: 'fas fa-book',
    name: 'Catalogue'
  }, {
    id: 4,
    root: '/contact',
    icon: 'fa fa-phone',
    name: 'Contact'
  }]);

  constructor(private translate: TranslateService) {

  }

  ngOnInit() {
    this.languages = localStorage.getItem('language')?.length > 0 ? JSON.parse(localStorage.getItem('language')) : this.languages;
    let langId = this.languages.find(x => x.isActive).id;

    this.translate.use(langId);
    this.year = new Date().getFullYear();
  }

  // TOGGLE MENU
  toggleMenu() {
    this.menuOpened = this.menuOpened === 'out' ? 'in' : 'out';
  }

  // CHANGE LANGUAGE
  changeLanguage(language: string) {
    let lang = JSON.parse(language);

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
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }
}
