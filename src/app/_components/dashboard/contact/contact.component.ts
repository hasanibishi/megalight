import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // VARIABLES
  lat = 41.987750317576115;
  lng = 20.95922687164701;
  zoom = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
