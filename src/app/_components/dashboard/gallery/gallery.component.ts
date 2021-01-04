import { Component, OnInit } from "@angular/core";
import { of } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  imagesList$ = of([
    {
      srcUrl: "./../assets/LusterImages/DSC_0108.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0110.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0111.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0112.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0113.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0115.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0116.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0117.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0118.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0120.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0121.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0122.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0123.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0130.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0134.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0135.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0142.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0144.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0145.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0146.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0149.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0152.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0153.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0159.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0161.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0163.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0164.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0165.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0166.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0167.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0180.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0186.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0192.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0193.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0195.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0198.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0199.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0201.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0203.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0204.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0205.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0207.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0212.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0230.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0233.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0234.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0235.jpg",
    },
    {
      srcUrl: "./../assets/LusterImages/DSC_0238.jpg",
    }
  ]);

  constructor() { }

  ngOnInit() {

  }
}
