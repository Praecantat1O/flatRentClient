import { NgModule } from '@angular/core';
import { FlatCreationComponent } from './flat-creation.component';
import { FlatCreationRoutingModule } from './flat-creation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbInputModule,
  NbFormFieldModule,
  NbIconModule,
  NbButtonModule,
  NbRadioModule,
  NbCheckboxModule,
  NbAutocompleteModule,
  NbListModule,
  NbButtonGroupModule,
  NbLayoutModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [FlatCreationComponent],
  imports: [
    CommonModule,
    FlatCreationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbRadioModule,
    NbCheckboxModule,
    NbListModule,
    NbAutocompleteModule,
    NbButtonGroupModule,
    NbSpinnerModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
})
export class FlatCreationModule { }
