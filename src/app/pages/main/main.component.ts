import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable, take, withLatestFrom } from 'rxjs';
import { IFlat } from 'src/app/interfaces/flat.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { LikeChange } from 'src/app/shared/helpers/likeChange.interface';
import { addFavorite, deleteFavorite, loadAllFlats } from 'src/app/store/app.actions';
import { getAllFlats, getCurrentUser, getLoaderStatus } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/app.state';
import { EntityStatus } from 'src/app/store/state.helpers';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  public flats$: Observable<IFlat[]>;
  public isLoading$: Observable<boolean>;
  public currentUser$: Observable<IUser>;

  public ngOnInit(): void {
    this.isLoading$ = this.store.select(getLoaderStatus);
    this.store.dispatch(loadAllFlats());
    this.currentUser$ = this.store.select(getCurrentUser)
      .pipe(
        filter(user => user.status === EntityStatus.Success),
        map(user => user.value)
      );

    this.flats$ = this.store.select(getAllFlats).pipe(
      filter(flats => flats.status === EntityStatus.Success),
      map(flats => flats.value),
      withLatestFrom(this.currentUser$),
      map(([flats, currentUser]) => flats.map(flat => {
        if (currentUser?.favorites?.includes(flat.id)) {
          return { ...flat, isFavorite: true }
        }
        return flat;
      }))
    );
  }

  public onLikeChange(change: LikeChange): void {
    this.currentUser$.pipe(take(1)).subscribe(user => {
      if (change.wasFavorite) {
        this.store.dispatch(deleteFavorite({ uid: user.uid, flatId: change.flatId }));
      } else {
        this.store.dispatch(addFavorite({ uid: user.uid, flatId: change.flatId }));
      }
    });
  }
}
