import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatComponent } from './flat.component';
import { FlatRoutingModule } from './flat-routing.module';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbSpinnerModule, NbUserModule } from '@nebular/theme';
import { GalleryThumbsModule } from 'src/app/shared/modules/gallery-thumbs/gallery-thumbs.module';

@NgModule({
  declarations: [FlatComponent],
  imports: [
    CommonModule,
    FlatRoutingModule,
    GalleryThumbsModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbSpinnerModule,
    NbUserModule,
  ],
})
export class FlatModule { }
