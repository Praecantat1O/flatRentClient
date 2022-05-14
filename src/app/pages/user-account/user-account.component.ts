import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, Observable, of, Subscription } from 'rxjs';
import { IFlat } from 'src/app/interfaces/flat.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { FlatService } from 'src/app/services/flat.service';
import { loadUser } from 'src/app/store/app.actions';
import { getCurrentUser, getLoaderStatus, getSelectedUser, isUserLoading } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/app.state';
import { EntityStatus } from 'src/app/store/state.helpers';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private flatService: FlatService
  ) { }

  public sub: Subscription;

  public isCurrent: boolean;
  public uid: string;

  public flats$: Observable<IFlat[]> = of([]);
  public favorites$: Observable<IFlat[]> = of([]);

  public currentUser$: Observable<IUser> = this.store.select(getCurrentUser).pipe(
    filter(user => user.status === EntityStatus.Success),
    map(user => user.value)
  );

  public selectedUser$: Observable<IUser> = this.store.select(getSelectedUser).pipe(
    filter(user => user.status === EntityStatus.Success),
    map(user => user.value)
  );

  public isUserLoading$ = this.store.select(isUserLoading);
  public isAppLoading$ = this.store.select(getLoaderStatus);

  public ngOnInit(): void {
    this.sub = combineLatest([this.route.params, this.currentUser$]).subscribe(([params, currentUser]) => {
      this.loadData(params['uid'], currentUser);
    })
  }

  private loadData(uid: string, currentUser: IUser): void {
    this.uid = uid;
    this.isCurrent = currentUser.uid === this.uid;

    this.store.dispatch(loadUser({ uid: this.uid, isCurrent: this.isCurrent }));

    this.flats$ = this.flatService.getFlatByUserUid(this.uid);

    if (this.isCurrent) {
      this.favorites$ = this.flatService.getFlatByIdList(currentUser?.favorites)
        .pipe(
          map(flatList => flatList.map(flat => {
            if (currentUser?.favorites.includes(flat.id)) {
              return { ...flat, isFavorite: true };
            }
            return flat;
          }))
        );
    }
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
