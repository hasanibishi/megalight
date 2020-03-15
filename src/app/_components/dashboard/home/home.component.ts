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
      '../assets/images/wallpaper1.jpg',
      '../assets/images/wallpaper2.jpg',
      '../assets/images/wallpaper3.jpg'
    ];
  }
}
