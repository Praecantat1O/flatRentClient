import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { IFlat } from 'src/app/interfaces/flat.interface';
import { loadAllFlats } from 'src/app/store/app.actions';
import { getAllFlats, getLoaderStatus } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  public flats$: Observable<IFlat[]>;
  public isLoading$: Observable<boolean>;

  public ngOnInit(): void {
    this.store.dispatch(loadAllFlats());
    this.flats$ = this.store.select(getAllFlats).pipe(map(flats => flats.value));
    this.isLoading$ = this.store.select(getLoaderStatus);
  }
}
