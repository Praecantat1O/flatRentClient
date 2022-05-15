import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, Observable, Subscription, take } from 'rxjs';
import { IFlat } from 'src/app/interfaces/flat.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { FlatService } from 'src/app/services/flat.service';
import { LikeChange } from 'src/app/shared/helpers/likeChange.interface';
import { addFavorite, deleteFavorite, deleteFlat, loadFavorites, loadUser, loadUserFlats } from 'src/app/store/app.actions';
import {
  getCurrentUser,
  getLoaderStatus,
  getSelectedUser,
  getUserFavorites,
  getUserFlats,
  isUserLoading,
} from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/app.state';
import { EntityStatus } from 'src/app/store/state.helpers';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>, private route: ActivatedRoute, private flatService: FlatService) { }

  public sub: Subscription;

  public isCurrent: boolean;
  public uid: string;
  public currentUser: IUser;

  //public flats$: Observable<IFlat[]> = of([]);
  // public favorites$: Observable<IFlat[]> = of([]);

  public currentUser$: Observable<IUser> = this.store.select(getCurrentUser).pipe(
    filter(user => user.status === EntityStatus.Success),
    map(user => user.value)
  );

  public selectedUser$: Observable<IUser> = this.store.select(getSelectedUser).pipe(
    filter(user => user.status === EntityStatus.Success),
    map(user => user.value)
  );

  public flats$: Observable<IFlat[]> = this.store.select(getUserFlats).pipe(
    filter(user => user.status === EntityStatus.Success),
    map(user => user.value)
  );

  public favorites$: Observable<IFlat[]> = this.store.select(getUserFavorites).pipe(
    filter(user => user.status === EntityStatus.Success),
    map(user => user.value),
    map(flatList => {
      return flatList.map((flat) => {
        if (this.currentUser?.favorites.includes(flat.id)) {
          return { ...flat, isFavorite: true };
        }
        return flat;
      });
    })
  );

  public isUserLoading$ = this.store.select(isUserLoading);
  public isAppLoading$ = this.store.select(getLoaderStatus);

  public ngOnInit(): void {
    this.sub = combineLatest([this.route.params, this.currentUser$]).subscribe(([params, currentUser]) => {
      this.loadData(params['uid'], currentUser);
    });
  }

  private loadData(uid: string, currentUser: IUser): void {
    this.uid = uid;
    this.isCurrent = currentUser.uid === this.uid;

    this.store.dispatch(loadUser({ uid: this.uid, isCurrent: this.isCurrent }));
    this.store.dispatch(loadUserFlats({ uid: this.uid }));

    if (this.isCurrent) {
      this.currentUser = currentUser;

      if (currentUser?.favorites !== null && currentUser?.favorites?.length > 0) {
        console.log('CALLED?');
        this.store.dispatch(loadFavorites({ ids: currentUser.favorites }));
      }
    }
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onLikeChange(change: LikeChange): void {
    this.currentUser$.pipe(take(1)).subscribe((user) => {
      if (change.wasFavorite) {
        this.store.dispatch(deleteFavorite({ uid: user.uid, flatId: change.flatId }));
      } else {
        this.store.dispatch(addFavorite({ uid: user.uid, flatId: change.flatId }));
      }
    });
  }

  public onDelete(flatId: number): void {
    this.store.dispatch(deleteFlat({ id: flatId }));
  }
}
