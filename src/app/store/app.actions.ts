import { createAction, props } from '@ngrx/store';
import { Address } from '../models/address.model';

enum ACTIONS {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_ERROR = '[Auth] Login Error',
  ADDRESS_SEARCH_AUTOCOMPLETE = '[Address] Address Search Autocomplete',
  ADDRESS_SEARCH_AUTOCOMPLETE_SUCCESS = '[Address] Address Search Autocomplete Success',
  ADDRESS_SEARCH_AUTOCOMPLETE_ERROR = '[Address] Address Search Autocomplete Error',
  ADDRESS_SUGGESTIONS_CLEAR = '[Address] Suggestions Clear',
  ADDRESS_SEARCH_CLEAR = '[Address] Address Search Clear',
  CREATE_FLAT = '[Flat] Create Flat',
  CREATE_FLAT_SUCCESS = '[Flat] Create Flat Success',
  CREATE_FLAT_ERROR = '[Flat] Create Flat Error',
}

export const addressSearchAutocomplete = createAction(
  ACTIONS.ADDRESS_SEARCH_AUTOCOMPLETE,
  props<{ addressToSearch: string }>()
);

export const addressSearchAutocompleteSuccess = createAction(
  ACTIONS.ADDRESS_SEARCH_AUTOCOMPLETE_SUCCESS,
  props<{ addressesSuggestions: Address[] }>()
);

export const addressSearchAutocompleteError = createAction(
  ACTIONS.ADDRESS_SEARCH_AUTOCOMPLETE_ERROR,
  props<{ error: Error }>()
);

export const addressSuggestionsClear = createAction(
  ACTIONS.ADDRESS_SUGGESTIONS_CLEAR
);

export const addressSearchClear = createAction(
  ACTIONS.ADDRESS_SEARCH_CLEAR
);

export const createFlat = createAction(
  ACTIONS.CREATE_FLAT,
  props<{ formData: FormData }>()
);

export const createFlatSuccess = createAction(
  ACTIONS.CREATE_FLAT_SUCCESS,
  props<{ createdFlatId: number }>()
);

export const createFlatError = createAction(
  ACTIONS.CREATE_FLAT_ERROR,
  props<{ error: Error }>()
);
