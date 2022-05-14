import { IBooking } from '../interfaces/booking.interface';

export class Booking implements IBooking {
  id: number;
  date: Date;

  constructor(booking: IBooking) {
    this.id = booking.id;
    this.date = new Date(booking.date);
  }
}
