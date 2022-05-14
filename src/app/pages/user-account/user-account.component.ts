import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, Observable, Subscription } from 'rxjs';
import { IFlat } from 'src/app/interfaces/flat.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { FlatService } from 'src/app/services/flat.service';
import { loadUser } from 'src/app/store/app.actions';
import { getCurrentUser, getSelectedUser } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/app.state';
import { EntityStatus, StateEntity } from 'src/app/store/state.helpers';

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

  public user: IUser;
  public sub: Subscription;
  public isCurrent: boolean;

  public flats$: Observable<IFlat[]>;
  public favorites$: Observable<IFlat[]>;
  public currentUser$: Observable<StateEntity<IUser>> = this.store.select(getCurrentUser);
  public selectedUser$: Observable<StateEntity<IUser>> = this.store.select(getSelectedUser);

  public ngOnInit(): void {
    const uid = this.route.snapshot.paramMap.get('uid');

    this.store.dispatch(loadUser({ uid }));

    this.sub = combineLatest([this.selectedUser$, this.currentUser$])
      .pipe(
        filter(([selectedUser, currentUser]) => {
          return selectedUser.status == EntityStatus.Success && currentUser.status === EntityStatus.Success;
        })
      )
      .subscribe(([selectedUser, currentUser]) => {
        this.user = selectedUser.value;
        this.isCurrent = selectedUser.value.uid === currentUser.value.uid;

        this.flats$ = this.flatService.getFlatByUserUid(uid);

        if (currentUser.value.favorites.length > 0) {
          this.favorites$ = this.flatService.getFlatByIdList(currentUser.value.favorites)
            .pipe(
              map(flatList => flatList.map(flat => {
                if (currentUser.value.favorites.includes(flat.id)) {
                  flat.isFavorite = true;
                }
                return flat;
              }))
            );
        }
      });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
