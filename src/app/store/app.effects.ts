import { Injectable } from '@angular/core';
import { map, catchError, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AppActions from './app.actions';
import { AddressService } from '../services/address.service';

@Injectable()
export class AppEffects {
  public searchAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.addressSearchAutocomplete),
      switchMap((item) => {
        return this.addressService.getAddressByString(item.addressToSearch).pipe(
          map((addresses) => AppActions.addressSearchAutocompleteSuccess({ addresses })),
          catchError((error) => of(AppActions.addressSearchAutocompleteError({ error })))
        );
      })
    )
  );

  constructor(private actions$: Actions, private addressService: AddressService) {}
}
