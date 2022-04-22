import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { FlatListComponent } from './components/flat-list/flat-list.component';
import { FlatItemComponent } from './components/flat-item/flat-item.component';
import { ImgPreviewComponent } from './components/img-preview/img-preview.component';

@NgModule({
  declarations: [
    FlatListComponent,
    FlatItemComponent,
    ImgPreviewComponent,
  ],
  imports: [
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    CommonModule,
  ],
  exports: [
    NbLayoutModule,
    NbEvaIconsModule,
    ImgPreviewComponent,
  ],
})
export class SharedModule {}
