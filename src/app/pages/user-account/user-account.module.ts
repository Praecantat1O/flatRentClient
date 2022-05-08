import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './user-account.component';
import { UserAccountRoutingModule } from './user-account-routing.module';
import { NbCardModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserAccountComponent],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    NbCardModule,
    SharedModule,
  ],
})
export class UserAccountModule {}
