import {
  ChangeDetectionStrategy,
  Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output,
} from '@angular/core';

import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues, NbDateService } from '@nebular/theme';

@Component({
  selector: 'app-day-cell',
  template: `
  <div class="cell-content">
    {{ day }}
  </div>
`,
  styleUrls: ['./../../calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDayCellComponent<D> implements NbCalendarCell<D, D> {

  @Input() date: D;

  @Input() selectedValue: D;

  @Input() visibleDate: D;

  @Input() min: D;

  @Input() max: D;

  @Input() filter: (arg: D) => boolean;

  @Input() size: NbCalendarSize = NbCalendarSize.MEDIUM;
  static ngAcceptInputType_size: NbCalendarSizeValues;

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() select: EventEmitter<D> = new EventEmitter(true);

  constructor(protected dateService: NbDateService<D>, private elementRef: ElementRef) { }

  @HostBinding('class.today') get today(): boolean {
    return this.dateService.isSameDaySafe(this.date, this.dateService.today());
  }

  @HostBinding('class.bounding-month') get boundingMonth(): boolean {
    return !this.dateService.isSameMonthSafe(this.date, this.visibleDate);
  }

  @HostBinding('class.selected') get selected(): boolean {
    return this.dateService.isSameDaySafe(this.date, this.selectedValue);
  }

  @HostBinding('class.empty') get empty(): boolean {
    return !this.date;
  }

  @HostBinding('class.disabled') get disabled(): boolean {
    return this.smallerThanMin() || this.greaterThanMax() || this.dontFitFilter();
  }

  @HostBinding('class.size-large')
  get isLarge(): boolean {
    return this.size === NbCalendarSize.LARGE;
  }

  @HostBinding('class.day-cell')
  dayCellClass = true;

  get day(): number {
    return this.date && this.dateService.getDate(this.date);
  }

  public isSelected: boolean = false;

  @HostListener('click')
  onClick() {
    if (this.disabled || this.empty) {
      return;
    }

    this.isSelected = !this.isSelected;
    this.elementRef.nativeElement.classList.toggle('selected');
    this.select.emit(this.date);
  }

  private smallerThanMin(): boolean {
    return this.date && this.min && this.dateService.compareDates(this.date, this.min) < 0;
  }

  private greaterThanMax(): boolean {
    return this.date && this.max && this.dateService.compareDates(this.date, this.max) > 0;
  }

  private dontFitFilter(): boolean {
    return this.date && this.filter && !this.filter(this.date);
  }
}
