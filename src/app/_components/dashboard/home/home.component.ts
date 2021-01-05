import { Component, HostListener, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // VARIABLES
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  public imagesSlide = [];

  swiperConfig: SwiperConfigInterface = {
    slidesPerView: 1,
    autoplay: true,
    navigation: true
  };

  ngOnInit() {
    this.imagesSlide = [
      '../assets/images/wallpapers/wallpaper1.jpg',
      '../assets/images/wallpapers/wallpaper2.jpg',
      '../assets/images/wallpapers/wallpaper3.jpg',
      '../assets/images/wallpapers/wallpaper4.jpg',
      '../assets/images/wallpapers/wallpaper5.jpg'
    ];
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
