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
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImgPreviewComponent } from 'src/app/shared/components/img-preview/img-preview.component';

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
    NbIconModule,
    NbButtonModule,
    NbRadioModule,
    NbCheckboxModule,
    NbAutocompleteModule,
    FontAwesomeModule,

  ],
})
export class FlatCreationModule {}
