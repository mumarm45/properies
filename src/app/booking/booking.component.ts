import { Component, OnInit, OnDestroy } from '@angular/core';
import {PropertyService} from '../service/property.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy {

  subParam: Subscription;
  peroperty;
  bookingForm: FormGroup;
  minDate: Date = new Date();
  // tslint:disable-next-line:max-line-length
  constructor(private propertySerivce: PropertyService, private router: ActivatedRoute, private formBuilder: FormBuilder, private snackBar: MatSnackBar, private route: Router ) {
   }

  ngOnInit() {
  this.createForm();
  this.subParam = this.router.params.pipe(
    mergeMap(({id}) => {
       return this.propertySerivce.getPropertyView(id);
     })
   ).subscribe(data => {
     this.peroperty = data;
   });
  }

  createForm() {
    this.bookingForm = this.formBuilder.group({
     fullName: ['', Validators.required],
     fromDate: ['', Validators.required],
     toDate: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnDestroy() {
    this.subParam.unsubscribe();
  }

  get f() {
    return this.bookingForm.controls;
  }

  myFilter() {
    return this.bookingForm.value.toDate > this.bookingForm.value.fromDate;
  }

  onSubmit() {
    // fake service call
    console.log(this.bookingForm);
    this.snackBar.open('You have successfully booked', 'done', {verticalPosition: 'top', horizontalPosition: 'left'});
    this.route.navigate(['/list']);
  }
}
