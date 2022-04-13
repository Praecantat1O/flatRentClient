import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    NbLayoutModule,
    NbEvaIconsModule,
    CommonModule,
  ],
  exports: [
    NbLayoutModule,
    NbEvaIconsModule,
    CommonModule,
  ],
})
export class SharedModule {}
