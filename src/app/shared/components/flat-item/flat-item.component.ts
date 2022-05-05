import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { IFlat } from 'src/app/interfaces/flat.interface';

@Component({
  selector: 'app-flat-item',
  templateUrl: './flat-item.component.html',
  styleUrls: ['./flat-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlatItemComponent implements OnInit {
  @Input() public flat: IFlat;

  public price: string;

  public faLocationDot = faLocationDot;

  public ngOnInit(): void {
    this.price = String(this.flat.price) + ' BYN';
  }
}
