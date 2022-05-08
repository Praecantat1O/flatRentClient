import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { getCurrentUser } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/app.state';
import { EntityStatus } from 'src/app/store/state.helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store<AppState>) { }

  public currentUserUid$: Observable<string> = this.store.select(getCurrentUser)
    .pipe(
      filter(user => user.status === EntityStatus.Success),
      map(user => user.value.uid)
    );
}
