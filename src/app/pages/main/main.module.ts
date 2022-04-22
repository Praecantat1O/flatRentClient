import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NbCardModule } from '@nebular/theme';
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    NbCardModule,
  ],
})
export class MainModule {}
