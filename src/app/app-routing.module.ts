import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ListViewComponent} from './list-view/list-view.component';

const routes: Routes = [
  { path: 'list', component: ListViewComponent },
  {path: 'booking',  loadChildren: './booking/booking.module#BookingModule'}, { path: '', redirectTo: '/list', pathMatch: 'full'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
