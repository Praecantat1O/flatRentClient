import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { NbCalendarKitModule, NbCalendarModule } from '@nebular/theme';
import { CustomDayCellComponent } from './components/day-cell/day-cell.component';

@NgModule({
  declarations: [CalendarComponent, CustomDayCellComponent],
  imports: [
    CommonModule,
    NbCalendarModule,
    NbCalendarKitModule,
  ],
  exports: [CalendarComponent],
})
export class CalendarModule { }
