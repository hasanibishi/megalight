import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  imagesUrl: string[] = [
    './../assets/LusterImages/DSC_0108.jpg',
    "./../assets/LusterImages/DSC_0110.jpg",
    "./../assets/LusterImages/DSC_0111.jpg",
    "./../assets/LusterImages/DSC_0112.jpg",
    "./../assets/LusterImages/DSC_0113.jpg",
    "./../assets/LusterImages/DSC_0115.jpg",
    "./../assets/LusterImages/DSC_0116.jpg",
    "./../assets/LusterImages/DSC_0117.jpg",
    "./../assets/LusterImages/DSC_0118.jpg",
    "./../assets/LusterImages/DSC_0120.jpg",
    "./../assets/LusterImages/DSC_0121.jpg",
    "./../assets/LusterImages/DSC_0122.jpg",
    "./../assets/LusterImages/DSC_0123.jpg",
    "./../assets/LusterImages/DSC_0130.jpg",
    "./../assets/LusterImages/DSC_0134.jpg",
    "./../assets/LusterImages/DSC_0135.jpg",
    "./../assets/LusterImages/DSC_0142.jpg",
    "./../assets/LusterImages/DSC_0144.jpg",
    "./../assets/LusterImages/DSC_0145.jpg",
    "./../assets/LusterImages/DSC_0146.jpg",
    "./../assets/LusterImages/DSC_0149.jpg",
    "./../assets/LusterImages/DSC_0152.jpg",
    "./../assets/LusterImages/DSC_0153.jpg",
    "./../assets/LusterImages/DSC_0159.jpg",
    "./../assets/LusterImages/DSC_0161.jpg",
    "./../assets/LusterImages/DSC_0163.jpg",
    "./../assets/LusterImages/DSC_0164.jpg",
    "./../assets/LusterImages/DSC_0165.jpg",
    "./../assets/LusterImages/DSC_0166.jpg",
    "./../assets/LusterImages/DSC_0167.jpg",
    "./../assets/LusterImages/DSC_0180.jpg",
    "./../assets/LusterImages/DSC_0186.jpg",
    "./../assets/LusterImages/DSC_0192.jpg",
    "./../assets/LusterImages/DSC_0193.jpg",
    "./../assets/LusterImages/DSC_0195.jpg",
    "./../assets/LusterImages/DSC_0198.jpg",
    "./../assets/LusterImages/DSC_0199.jpg",
    "./../assets/LusterImages/DSC_0201.jpg",
    "./../assets/LusterImages/DSC_0203.jpg",
    "./../assets/LusterImages/DSC_0204.jpg",
    "./../assets/LusterImages/DSC_0205.jpg",
    "./../assets/LusterImages/DSC_0207.jpg",
    "./../assets/LusterImages/DSC_0212.jpg",
    "./../assets/LusterImages/DSC_0230.jpg",
    "./../assets/LusterImages/DSC_0233.jpg",
    "./../assets/LusterImages/DSC_0234.jpg",
    "./../assets/LusterImages/DSC_0235.jpg",
    "./../assets/LusterImages/DSC_0238.jpg"
  ];

  constructor() { }

  ngOnInit() { }


}