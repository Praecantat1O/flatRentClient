import { createAction, props } from '@ngrx/store';
import { IFlatUser } from '../interfaces/flat-user.interface';
import { IFlat } from '../interfaces/flat.interface';
import { IUser, IUserToDB } from '../interfaces/user.interface';
import { Address } from '../models/address.model';

enum ACTIONS {
  LOAD_USER = '[Auth] Load User',
  LOAD_USER_SUCCESS = '[Auth] Load User Success',
  LOAD_USER_ERROR = '[Auth] Load User Error',
  LOAD_CURRENT_USER = '[Auth] Load Current User',
  LOAD_CURRENT_USER_SUCCESS = '[Auth] Load Current User Success',
  LOAD_CURRENT_USER_ERROR = '[Auth] Load Current User Error',
  CREATE_USER = '[Auth] Create User',
  CREATE_USER_SUCCESS = '[Auth] Create User Success',
  CREATE_USER_ERROR = '[Auth] Create User Error',
  CLEAR_USER = '[Auth] Clear User',
  ADDRESS_SEARCH_AUTOCOMPLETE = '[Address] Address Search Autocomplete',
  ADDRESS_SEARCH_AUTOCOMPLETE_SUCCESS = '[Address] Address Search Autocomplete Success',
  ADDRESS_SEARCH_AUTOCOMPLETE_ERROR = '[Address] Address Search Autocomplete Error',
  ADDRESS_SUGGESTIONS_CLEAR = '[Address] Suggestions Clear',
  ADDRESS_SEARCH_CLEAR = '[Address] Address Search Clear',
  CREATE_FLAT = '[Flat] Create Flat',
  CREATE_FLAT_SUCCESS = '[Flat] Create Flat Success',
  CREATE_FLAT_ERROR = '[Flat] Create Flat Error',
  LOAD_FLAT_PAGE = '[Flat] Load Flat Page',
  LOAD_FLAT_PAGE_SUCCESS = '[Flat] Load Flat Page Success',
  LOAD_FLAT_PAGE_ERROR = '[Flat] Load Flat Page Error',
  LOAD_ALL_FLATS = '[Flat] Load All Flats',
  LOAD_ALL_FLATS_SUCCESS = '[Flat] Load All Flats Success',
  LOAD_ALL_FLATS_ERROR = '[Flat] Load All Flats Error',
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

export const loadFlatPage = createAction(
  ACTIONS.LOAD_FLAT_PAGE,
  props<{ id: string }>()
);

export const loadFlatPageSuccess = createAction(
  ACTIONS.LOAD_FLAT_PAGE_SUCCESS,
  props<{ flatPage: IFlatUser }>()
);

export const loadFlatPageError = createAction(
  ACTIONS.LOAD_FLAT_PAGE_ERROR,
  props<{ error: Error }>()
);

export const loadAllFlats = createAction(
  ACTIONS.LOAD_ALL_FLATS
);

export const loadAllFlatsSuccess = createAction(
  ACTIONS.LOAD_ALL_FLATS_SUCCESS,
  props<{ flats: IFlat[] }>()
);

export const loadAllFlatsError = createAction(
  ACTIONS.LOAD_ALL_FLATS_ERROR,
  props<{ error: Error }>()
);

export const createUser = createAction(
  ACTIONS.CREATE_USER,
  props<{ userToDB: IUserToDB }>()
);

export const createUserSuccess = createAction(
  ACTIONS.CREATE_USER_SUCCESS,
  props<{ uid: string }>()
);

export const createUserError = createAction(
  ACTIONS.CREATE_USER_ERROR,
  props<{ error: Error }>()
);

export const loadUser = createAction(
  ACTIONS.LOAD_USER,
  props<{ uid: string }>()
);

export const loadUserSuccess = createAction(
  ACTIONS.LOAD_USER_SUCCESS,
  props<{ user: IUser }>()
);

export const loadUserError = createAction(
  ACTIONS.LOAD_USER_ERROR,
  props<{ error: Error }>()
);

export const loadCurrentUser = createAction(
  ACTIONS.LOAD_CURRENT_USER,
  props<{ uid: string }>()
);

export const loadCurrentUserSuccess = createAction(
  ACTIONS.LOAD_CURRENT_USER_SUCCESS,
  props<{ user: IUser }>()
);

export const loadCurrentUserError = createAction(
  ACTIONS.LOAD_CURRENT_USER_ERROR,
  props<{ error: Error }>()
);

export const clearUser = createAction(
  ACTIONS.CLEAR_USER
);
