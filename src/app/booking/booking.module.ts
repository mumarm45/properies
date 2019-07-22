import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import {BookingRouting} from './booking-routing';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { LoadMapComponent } from './load-map/load-map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModules} from '../material-modules.module';
@NgModule({
  declarations: [BookingComponent, LoadMapComponent],
  imports: [
    CommonModule,
    BookingRouting,
    MaterialModules,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
