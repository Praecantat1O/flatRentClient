import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbLayoutModule } from '@nebular/theme';
import { FlatListComponent } from './components/flat-list/flat-list.component';
import { FlatItemComponent } from './components/flat-item/flat-item.component';

@NgModule({
  declarations: [
    FlatListComponent,
    FlatItemComponent,
  ],
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
