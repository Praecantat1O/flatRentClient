import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDateService } from '@nebular/theme';
import { IBooking } from 'src/app/interfaces/booking.interface';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingComponent {
  constructor(private dateService: NbDateService<Date>, private datePipe: DatePipe) { }

  @Input() isOwn: boolean;
  @Input() booking: IBooking[];
  @Output() addBooking = new EventEmitter<string>();
  @Output() deleteBooking = new EventEmitter<number>();

  public form = new FormGroup({
    datePicker: new FormControl(null, [Validators.required]),
  });
  public today = this.dateService.addDay(this.dateService.today(), 0);

  public add(): void {
    const date = this.datePipe.transform(this.form.get('datePicker').value, 'yyyy-MM-dd')

    this.addBooking.emit(date);
    this.form.get('datePicker').reset();
  }

  public remove(id: number): void {
    this.deleteBooking.emit(id)
  }

  public itemId(index: any, item: IBooking) {
    return item.id;
  }

  public filterDays = (date: Date) => {
    if (date) {
      return !this.booking
        .map(item => this.datePipe.transform(item.date, 'yyyy-MM-dd'))
        .includes(this.datePipe.transform(date, 'yyyy-MM-dd'))
    }
    return true;
  };
}
