import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public imagesSlide: any = [];

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
}
