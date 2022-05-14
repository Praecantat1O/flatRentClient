import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { IFlat } from 'src/app/interfaces/flat.interface';
import { LikeChange } from '../../helpers/likeChange.interface';

@Component({
  selector: 'app-flat-item',
  templateUrl: './flat-item.component.html',
  styleUrls: ['./flat-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlatItemComponent implements OnInit {
  @Input() public flat: IFlat;
  @Input() public hasLikeButton?: boolean;
  @Input() public hasDeleteButton?: boolean;

  @Output() likeChange?: EventEmitter<LikeChange> = new EventEmitter<LikeChange>();
  @Output() delete?: EventEmitter<number> = new EventEmitter<number>();

  public price: string;
  public isFavorite: boolean;

  public faLocationDot = faLocationDot;

  public ngOnInit(): void {
    this.price = String(this.flat.price) + ' BYN';
    this.isFavorite = this.flat.isFavorite;
  }

  public switchLike(id: number): void {
    this.likeChange.emit({ flatId: id, wasFavorite: this.isFavorite });
    this.isFavorite = !this.isFavorite;
  }

  public deleteFlat(id: number): void {
    this.delete.emit(id);
  }
}
