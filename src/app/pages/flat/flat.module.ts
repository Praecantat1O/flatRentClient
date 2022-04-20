import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatComponent } from './flat.component';
import { FlatRoutingModule } from './flat-routing.module';

@NgModule({
  declarations: [FlatComponent],
  imports: [
    FlatRoutingModule,
    CommonModule,
  ],
})
export class FlatModule {}
