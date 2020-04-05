import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // VARIABLES
  lat = 42.002112;
  lng = 20.962813;
  zoom = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
