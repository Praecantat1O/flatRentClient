import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NbCardModule } from '@nebular/theme';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    MainRoutingModule,
    SharedModule,
    NbCardModule,
  ],
})
export class MainModule {}
