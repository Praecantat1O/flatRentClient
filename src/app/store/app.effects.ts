import { Injectable } from '@angular/core';
import { map, catchError, of, switchMap, delay } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AppActions from './app.actions';
import { AddressService } from '../services/address.service';
import { FlatService } from '../services/flat.service';
import { IFlatUser } from '../interfaces/flat-user.interface';
import { Flat } from '../models/flat.model';
import { User } from '../models/user.model';

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
          map((response) => AppActions.createFlatSuccess(response.flatId)),
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
          map((value: IFlatUser) => {
            const flat = new Flat(value.flat);
            const user = new User(value.user);

            return { flat, user };
          }),
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
          map(flats => flats.map(flat => new Flat(flat))),
          map((flats) => AppActions.loadAllFlatsSuccess({ flats })),
          catchError((error) => of(AppActions.loadAllFlatsError({ error })))
        );
      })
    )
  );

  constructor(private actions$: Actions, private addressService: AddressService, private flatService: FlatService) { }
}
