import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatCreationComponent } from './flat-creation.component';
import { FlatCreationRoutingModule } from './flat-creation-routing.module';

@NgModule({
  declarations: [FlatCreationComponent],
  imports: [
    FlatCreationRoutingModule,
    CommonModule,
  ],
})
export class FlatCreationModule {}
