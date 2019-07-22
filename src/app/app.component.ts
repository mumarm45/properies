import { Component } from '@angular/core';
import {LocationService} from './service/location.service';
import {Observable} from 'rxjs';
import {Positions} from './model/Position';
import {PropertyService} from './service/property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private locationService: LocationService, private propertyService: PropertyService) {
    this.locationService.getLocation();
    this.locationService.getPositionObserveable().subscribe(po => {
    po && this.propertyService.makeAPICALL(po);
    });
  }
}
