import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbAutocompleteModule,
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { FlatListComponent } from './components/flat-list/flat-list.component';
import { FlatItemComponent } from './components/flat-item/flat-item.component';
import { ImgPreviewComponent } from './components/img-preview/img-preview.component';
import { AddressAutocompleteComponent } from './components/address-autocomplete/address-autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './components/address/address.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SortBookingPipe } from './pipes/sort-dates.pipe';

@NgModule({
  declarations: [
    FlatListComponent,
    FlatItemComponent,
    ImgPreviewComponent,
    AddressAutocompleteComponent,
    AddressComponent,
    SortBookingPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbAutocompleteModule,
    NbSpinnerModule,
    NbBadgeModule,
    FontAwesomeModule,
  ],
  exports: [
    ImgPreviewComponent,
    AddressAutocompleteComponent,
    AddressComponent,
    FlatItemComponent,
    FlatListComponent,
    SortBookingPipe,
  ],
})
export class SharedModule { }
