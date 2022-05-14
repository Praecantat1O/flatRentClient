import { Pipe, PipeTransform } from '@angular/core';
import { IBooking } from 'src/app/interfaces/booking.interface';


@Pipe({
  name: 'sortBooking',
})
export class SortBookingPipe implements PipeTransform {

  transform(value: IBooking[], type: string): IBooking[] {
    if (type === 'asc') {
      return [...value].sort((a, b) => a.date.getDate() - b.date.getDate())
    } else {
      return [...value].sort((a, b) => b.date.getDate() - a.date.getDate())
    }
  }

}
