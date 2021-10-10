import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lat: number = 41.987692465069095;
  lng: number = 20.959520050299453;
  zoom: number = 17;

  constructor() { }

  ngOnInit() {
  }
}
