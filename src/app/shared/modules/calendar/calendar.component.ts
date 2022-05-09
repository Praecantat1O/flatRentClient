import { Component } from '@angular/core';
import { NbDateService } from '@nebular/theme';
import { CustomDayCellComponent } from './components/day-cell/day-cell.component';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  entryComponents: [CustomDayCellComponent],
})
export class CalendarComponent {
  constructor(protected dateService: NbDateService<Date>) { }

  public date = new Date();
  public cellComponent = CustomDayCellComponent;

  public call(e: any) {
    console.log('event: ', e);
  }
}
