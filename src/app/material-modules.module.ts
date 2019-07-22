import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatInputModule, MatListModule, MatMenuModule,
 MatNativeDateModule, MatToolbarModule, MatSlideToggleModule, MatGridListModule, MatSnackBarModule
} from '@angular/material';

@NgModule({
  // tslint:disable-next-line:max-line-length
  exports: [CommonModule, MatButtonModule, MatGridListModule, MatSlideToggleModule, MatToolbarModule, MatSnackBarModule, MatMenuModule, MatCardModule, MatInputModule,  MatListModule,  MatDatepickerModule, MatAutocompleteModule, MatNativeDateModule]
})
export class MaterialModules {
}
