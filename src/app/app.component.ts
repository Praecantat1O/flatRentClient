import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, Observable } from 'rxjs';
import { getLoaderStatus } from './store/app.selectors';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  public isLoading$: Observable<boolean>;;

  public ngOnInit(): void {
    this.isLoading$ = this.store.select(getLoaderStatus).pipe(delay(0));
  }

  title = 'Flat Rent Client';
}
