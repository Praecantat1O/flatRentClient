import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
} from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { SortBookingPipe } from '../../pipes/sort-dates.pipe';
import { SharedModule } from '../../shared.module';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { ru } from 'date-fns/locale';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    NbDatepickerModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbFormFieldModule,
    NbListModule,
    NbCardModule,
    ReactiveFormsModule,
    SharedModule,
    NbDateFnsDateModule.forChild({
      parseOptions: { locale: ru },
      formatOptions: { locale: ru },
    }),
  ],
  exports: [BookingComponent],
  providers: [SortBookingPipe],
})
export class BookingModule {}
