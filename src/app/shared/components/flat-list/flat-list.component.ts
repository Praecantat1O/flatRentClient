import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IFlat } from 'src/app/interfaces/flat.interface';
import { LikeChange } from '../../helpers/likeChange.interface';


@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlatListComponent {
  @Input() public flats: IFlat[];
  @Input() public hasLikeButton?: boolean;
  @Input() public hasDeleteButton?: boolean;
  @Input() public isFavorites?: boolean;

  @Output() likeChange?: EventEmitter<LikeChange> = new EventEmitter<LikeChange>();
  @Output() delete?: EventEmitter<number> = new EventEmitter<number>();

  public onLikeChange(change: LikeChange) {
    this.likeChange.emit(change);
  }

  public onDelete(id: number) {
    this.delete.emit(id);
  }
}
