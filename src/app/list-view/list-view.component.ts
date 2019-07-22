import { Component, OnInit, Input } from '@angular/core';
import {PropertyService} from '../service/property.service';
import {Observable} from 'rxjs';
import {LocationService} from '../service/location.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  private position$: Observable<any> = this.propertyService.propertyData.asObservable() ;
  constructor(private propertyService: PropertyService, private router: Router) {
  }

  ngOnInit() {
  }


  loadUrl(url) {
    this.propertyService.makeAPICALL(undefined, url);
  }

  bookProperty(url) {
    this.router.navigate([`/booking/view`, url]);
  }
}
