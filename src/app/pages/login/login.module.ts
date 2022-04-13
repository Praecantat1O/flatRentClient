import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
  ],
})
export class LoginModule {}
