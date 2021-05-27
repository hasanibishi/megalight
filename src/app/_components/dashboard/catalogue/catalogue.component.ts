import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  catalogs$ = of([
    {
      name: 'TRIO 2021',
      link: 'https://www.trio-lighting.com/de/catalogues/?fbclid=IwAR3GogXIUxHqYV5Sj7caPb-Qbn7nTcn4XzmzcHmiQ4LFqpbh8rxhgsQPyK0#TRIO',
      image: './../assets/images/page_1.jpg',
      orientation: 'v'
    },
    {
      name: 'RL 2021',
      link: 'https://www.trio-lighting.com/de/catalogues/?fbclid=IwAR3GogXIUxHqYV5Sj7caPb-Qbn7nTcn4XzmzcHmiQ4LFqpbh8rxhgsQPyK0#RL',
      image: './../assets/images/page_2.jpg',
      orientation: 'v'
    },
    {
      name: 'OUTDOOR 2020',
      link: 'https://www.trio-lighting.com/de/catalogues/?fbclid=IwAR3GogXIUxHqYV5Sj7caPb-Qbn7nTcn4XzmzcHmiQ4LFqpbh8rxhgsQPyK0#OUTDOOR',
      image: './../assets/images/page_3.jpg',
      orientation: 'v'
    },
    {
      name: 'NEWS 2020',
      link: 'https://www.trio-lighting.com/de/catalogues/?fbclid=IwAR3GogXIUxHqYV5Sj7caPb-Qbn7nTcn4XzmzcHmiQ4LFqpbh8rxhgsQPyK0#NEWS',
      image: './../assets/images/page_4.jpg',
      orientation: 'v'
    },
    {
      name: 'Lucea Exclusive',
      link: 'http://www.lucea.com.tr/grup-kategori/2/exclusive',
      image: './../assets/images/lucea.png',
      orientation: 'h'
    },
    {
      name: 'Lucea Style',
      link: 'http://www.lucea.com.tr/grup-kategori/4/style',
      image: './../assets/images/lucea.png',
      orientation: 'h'
    }]);

  constructor() { }

  ngOnInit(): void {
  }

}
