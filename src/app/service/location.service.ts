import { Injectable, InjectionToken } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { Positions} from '../model/Position';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private position: BehaviorSubject<Positions> = new BehaviorSubject<Positions>(null);
  constructor() { }


nativeNavigator(): Geolocation  {
    return navigator.geolocation;
  }

  getPositionObserveable(): Observable<Positions> {
    return this.position.asObservable();
  }
  getLocation() {
  this.nativeNavigator().getCurrentPosition((position) => {
    this.getPosition(position);
  });
}
getPosition({coords}) {
this.position.next(new Positions(coords.latitude, coords.longitude) );
}

}
