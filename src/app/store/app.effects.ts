import { Injectable } from '@angular/core';
import { map, catchError, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AppActions from './app.actions';
import { AddressService } from '../services/address.service';
import { FlatService } from '../services/flat.service';

@Injectable()
export class AppEffects {
  public searchAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.addressSearchAutocomplete),
      switchMap((item) => {
        return this.addressService.getAddressByString(item.addressToSearch).pipe(
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
          map((response) => AppActions.createFlatSuccess(response.flatId)),
          catchError((error) => of(AppActions.createFlatError({ error })))
        );
      })
    )
  );

  constructor(private actions$: Actions, private addressService: AddressService, private flatService: FlatService) { }
}
