import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { clearUser } from 'src/app/store/app.actions';
import { getCurrentUser, isLogged } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/app.state';
import { EntityStatus } from 'src/app/store/state.helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store<AppState>, private userService: UserService, private router: Router) { }

  public currentUserUid$: Observable<string> = this.store.select(getCurrentUser)
    .pipe(
      filter(user => user.status === EntityStatus.Success),
      map(user => user.value.uid)
  );

  public isLogged$ = this.store.select(isLogged);

  public onSignOut(): void {
    this.userService.signOut();
    this.store.dispatch(clearUser());
    this.router.navigate(['/login']);
  }
}
