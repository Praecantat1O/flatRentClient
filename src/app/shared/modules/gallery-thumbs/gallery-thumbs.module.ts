import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryThumbsComponent } from './gallery-thumbs.component';
import { GalleryModule, GALLERY_CONFIG } from 'ng-gallery';

@NgModule({
  declarations: [
    GalleryThumbsComponent,
  ],
  imports: [
    CommonModule,
    GalleryModule,
  ],
  exports: [GalleryThumbsComponent],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover',
      },
    },
  ],
})
export class GalleryThumbsModule {}
