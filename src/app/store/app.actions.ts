import { createAction, props } from '@ngrx/store';
import { Address } from '../models/address.model';

enum ACTIONS {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_ERROR = '[Auth] Login Error',
  ADDRESS_SEARCH_AUTOCOMPLETE = '[Address] Address Search Autocomplete',
  ADDRESS_SEARCH_AUTOCOMPLETE_SUCCESS = '[Address] Address Search Autocomplete Success',
  ADDRESS_SEARCH_AUTOCOMPLETE_ERROR = '[Address] Address Search Autocomplete Error',
}

export const addressSearchAutocomplete = createAction(
  ACTIONS.ADDRESS_SEARCH_AUTOCOMPLETE,
  props<{ addressToSearch: string }>()
);

export const addressSearchAutocompleteSuccess = createAction(
  ACTIONS.ADDRESS_SEARCH_AUTOCOMPLETE_SUCCESS,
  props<{ addresses: Address[] }>()
);

export const addressSearchAutocompleteError = createAction(
  ACTIONS.ADDRESS_SEARCH_AUTOCOMPLETE_ERROR,
  props<{ error: Error }>()
);
