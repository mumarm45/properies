import { Injectable, APP_ID } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Positions} from '../model/Position';
import {LocationService} from './location.service';
import {map, tap, publishReplay, mergeMap} from 'rxjs/operators';
import {PropertyData} from '../model/PropertyData';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Records} from '../model/Records';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  APP_ID = '8ObN0i3CM8eYZ1UHZX2E';
  APP_CODE = 'rkUV-eGHQqJ3FrDEmqvA_g';
  position: Positions;
  propertyData: BehaviorSubject<Records> = new BehaviorSubject<Records>(null);
  private urlBylocation = `https://places.cit.api.here.com/places/v1/discover/explore?cat=accommodation`;
  private urlBySearch = 'https://places.cit.api.here.com/places/v1/autosuggest';

  constructor(private httpClient: HttpClient) {
  }
  // tslint:disable-next-line:max-line-length
  makeAPICALL(position: Positions = this.position, url = this.urlBylocation + `&at=${position.latitude},${position.longitude}&app_id=${this.APP_ID}&app_code=${this.APP_CODE}`) {
    this.position = position;
    return this.httpClient.get(url).pipe(
     map((response: any) => {
       if (response.location) {
         const [lat, lon] = response.location.position;
         this.makeAPICALL(new Positions(lat, lon));
         return null;
       } else {
        const results = response.items ? response.items : response.results.items ? response.results.items : response.results;

        // tslint:disable-next-line:max-line-length
        return new Records(results.map((item: PropertyData) => (new PropertyData(item))), response.next ? response.next : response.results ? response.results.next : undefined, response.previous ? response.previous : response.previous ? response.results.previous : undefined) ;
       }
     })
     ).subscribe(data => { this.propertyData.next(data); });
  }

  searchSpecificLocation(searchText: string) {
     // tslint:disable-next-line:max-line-length
    return this.httpClient.get(this.urlBySearch + `?q=${searchText}&at=${this.position.latitude},${this.position.longitude}&app_id=${this.APP_ID}&app_code=${this.APP_CODE}`).pipe(
      map((response: any) => response.results.map(item => ({
        title: item.title,
        url: item.href
      })))
      );
  }

  getPropertyView(url: string) {
    return url &&  this.httpClient.get(url).pipe(
      map((response: any)  => {
        return{
          name: response.name,
          view: response.view,
          address: response.location.address.text,
          city: response.location.address.city,
          phone: response.contacts.phone && response.contacts.phone.map(phone => phone.value).join(', '),
          email: response.contacts.email && response.contacts.email.map(email =>  email.value).join(', '),
          website: response.contacts.website && response.contacts.website.map(wbs =>  wbs.value).join(', '),
        };
      })
    );
  }

  loadHtml(url) {
    return this.httpClient.get(url);
  }
}
