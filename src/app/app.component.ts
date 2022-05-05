import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoaderStatus } from './store/app.selectors';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store<AppState>) { }

  public isLoading$: Observable<boolean> = this.store.select(getLoaderStatus);

  title = 'Flat Rent Client';
}
