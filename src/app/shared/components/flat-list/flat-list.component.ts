import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IFlat } from 'src/app/interfaces/flat.interface';


@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlatListComponent {
  @Input() public flats$: Observable<IFlat[]>;
}
