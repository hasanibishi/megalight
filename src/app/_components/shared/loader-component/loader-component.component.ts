import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/_services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader-component.component.html',
  styleUrls: ['./loader-component.component.scss']
})
export class LoaderComponentComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  isLoading: Subject<boolean> = this.loaderService.isLoading;

  ngOnInit() {
  }

}
