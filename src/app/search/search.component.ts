import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../service/property.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map, switchMap, debounceTime} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filteredOptions: Observable<any>;
  myControl = new FormControl();
  constructor(private propertyService: PropertyService, private router: Router) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => this.propertyService.searchSpecificLocation(value.title ? value.title : value))
    );
  }
  searchData(data) {
    this.propertyService.makeAPICALL(undefined, data.url);
    this.router.navigate(['/list']);
  }

  display(pro) {
    return pro ? pro.title : '';
  }

}
