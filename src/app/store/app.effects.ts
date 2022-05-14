import { Injectable } from '@angular/core';
import { map, catchError, of, switchMap, delay } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AppActions from './app.actions';
import { AddressService } from '../services/address.service';
import { FlatService } from '../services/flat.service';
import { UserService } from '../services/user.service';

@Injectable()
export class AppEffects {
  public searchAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.addressSearchAutocomplete),
      switchMap((item) => {
        return this.addressService.getAddressByString(item.addressToSearch).pipe(
          delay(500),
          map((addressesSuggestions) => {
            if (addressesSuggestions.length === 0) {
              addressesSuggestions = null;
            }
            return AppActions.addressSearchAutocompleteSuccess({ addressesSuggestions })
          }),
          catchError((error) => of(AppActions.addressSearchAutocompleteError({ error })))
        );
      })
    )
  );

  public createFlat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.createFlat),
      switchMap((item) => {
        return this.flatService.createFlat(item.formData).pipe(
          delay(500),
          map((response) => AppActions.createFlatSuccess({ createdFlatId: response.id })),
          catchError((error) => of(AppActions.createFlatError({ error })))
        );
      })
    )
  );

  public loadFlatPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadFlatPage),
      switchMap((item) => {
        return this.flatService.getFlatById(item.id).pipe(
          delay(500),
          map((flatPage) => AppActions.loadFlatPageSuccess({ flatPage })),
          catchError((error) => of(AppActions.loadFlatPageError({ error })))
        );
      })
    )
  );

  public loadAllFlats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadAllFlats),
      switchMap(() => {
        return this.flatService.getAll().pipe(
          delay(500),
          map((flats) => AppActions.loadAllFlatsSuccess({ flats })),
          catchError((error) => of(AppActions.loadAllFlatsError({ error })))
        );
      })
    )
  );

  public createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.createUser),
      switchMap((item) => {
        return this.userService.createUser(item.userToDB).pipe(
          delay(500),
          map((user) => AppActions.createUserSuccess({ uid: user.uid })),
          map((user) => AppActions.loadCurrentUser({ uid: user.uid })),
          catchError((error) => of(AppActions.createUserError({ error })))
        );
      })
    )
  );

  public getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadUser),
      switchMap((item) => {
        return this.userService.getUserByUid(item.uid, item.isCurrent).pipe(
          delay(500),
          map((user) => {
            user = { ...user, favorites: null };
            return AppActions.loadUserSuccess({ user })
          }),
          catchError((error) => of(AppActions.loadUserError({ error })))
        );
      })
    )
  );

  public getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadCurrentUser),
      switchMap((item) => {
        return this.userService.getUserByUid(item.uid, true).pipe(
          map((user) => AppActions.loadCurrentUserSuccess({ user })),
          catchError((error) => of(AppActions.loadCurrentUserError({ error })))
        );
      })
    )
  );

  public addBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.addBooking),
      switchMap((item) => {
        return this.flatService.addBooking(item.date, item.flatId).pipe(
          map(() => AppActions.addBookingSuccess({ flatId: item.flatId })),
          map(() => AppActions.loadFlatPage({ id: item.flatId })),
          catchError((error) => of(AppActions.addBookingError({ error })))
        );
      })
    )
  );

  public deleteBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.deleteBooking),
      switchMap((item) => {
        return this.flatService.deleteBooking(item.id).pipe(
          map(() => AppActions.deleteBookingSuccess({ flatId: item.flatId })),
          map(() => AppActions.loadFlatPage({ id: item.flatId })),
          catchError((error) => of(AppActions.deleteBookingError({ error })))
        );
      })
    )
  );

  public addFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.addFavorite),
      switchMap((item) => {
        return this.userService.addFavorite(item.uid, item.flatId).pipe(
          map(() => AppActions.addFavoriteSuccess({ flatId: item.flatId })),
          catchError((error) => of(AppActions.addFavoriteError({ error })))
        );
      })
    )
  );

  public deleteFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.deleteFavorite),
      switchMap((item) => {
        return this.userService.deleteFavorite(item.uid, item.flatId).pipe(
          map(() => AppActions.deleteFavoriteSuccess()),
          catchError((error) => of(AppActions.deleteFavoriteError({ error })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private addressService: AddressService,
    private flatService: FlatService,
    private userService: UserService
  ) { }
}
