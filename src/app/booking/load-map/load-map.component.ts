import { Component, OnInit, Input } from '@angular/core';
import {PropertyService} from 'src/app/service/property.service';

@Component({
  selector: 'app-load-map',
  templateUrl: './load-map.component.html',
  styleUrls: ['./load-map.component.css']
})
export class LoadMapComponent implements OnInit {

  @Input() url: string;
  loadMap: any;
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.loadHtml(this.url).subscribe(data => {
      this.loadMap = data;
    });
  }

}
