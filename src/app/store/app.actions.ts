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
  CLEAR_CREATED_FLAT = '[Flat] Clear Created Flat',
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
  ADD_BOOKING = '[Booking] Add Booking',
  ADD_BOOKING_SUCCESS = '[Booking] Add Booking Success',
  ADD_BOOKING_ERROR = '[Booking] Add Booking Error',
  DELETE_BOOKING = '[Booking] Delete Booking',
  DELETE_BOOKING_SUCCESS = '[Booking] Delete Booking Success',
  DELETE_BOOKING_ERROR = '[Booking] Delete Booking Error',
  ADD_FAVORITE = '[User] Add Favorite',
  ADD_FAVORITE_SUCCESS = '[User] Add Favorite Success',
  ADD_FAVORITE_ERROR = '[User] Add Favorite Error',
  DELETE_FAVORITE = '[User] Delete Favorite',
  DELETE_FAVORITE_SUCCESS = '[User] Delete Favorite Success',
  DELETE_FAVORITE_ERROR = '[User] Delete Favorite Error',
  DELETE_FLAT = '[Flat] Delete Flat',
  DELETE_FLAT_SUCCESS = '[Flat] Delete Flat Success',
  DELETE_FLAT_ERROR = '[Flat] Delete Flat Error',
  LOAD_USER_FLATS = '[Flat] Load User Flats',
  LOAD_USER_FLATS_SUCCESS = '[Flat] Load User Flats Success',
  LOAD_USER_FLATS_ERROR = '[Flat] Load User Flats Error',
  LOAD_FAVORITES = '[Flat] Load Favorites',
  LOAD_FAVORITES_SUCCESS = '[Flat] Load Favorites Success',
  LOAD_FAVORITES_ERROR = '[Flat] Load Favorites Error',
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

export const clearCreatedFlat = createAction(
  ACTIONS.CLEAR_CREATED_FLAT
);

export const loadFlatPage = createAction(
  ACTIONS.LOAD_FLAT_PAGE,
  props<{ id: number }>()
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
  props<{ uid: string, isCurrent?: boolean }>()
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

export const addBooking = createAction(
  ACTIONS.ADD_BOOKING,
  props<{ date: string, flatId: number }>()
);

export const addBookingSuccess = createAction(
  ACTIONS.ADD_BOOKING_SUCCESS,
  props<{ flatId: number }>()
);

export const addBookingError = createAction(
  ACTIONS.ADD_BOOKING_ERROR,
  props<{ error: Error }>()
);

export const deleteBooking = createAction(
  ACTIONS.DELETE_BOOKING,
  props<{ id: number, flatId: number }>()
);

export const deleteBookingSuccess = createAction(
  ACTIONS.DELETE_BOOKING_SUCCESS,
  props<{ flatId: number }>()
);

export const deleteBookingError = createAction(
  ACTIONS.DELETE_BOOKING_ERROR,
  props<{ error: Error }>()
);

export const addFavorite = createAction(
  ACTIONS.ADD_FAVORITE,
  props<{ uid: string, flatId: number }>()
);

export const addFavoriteSuccess = createAction(
  ACTIONS.ADD_FAVORITE_SUCCESS,
  props<{ flatId: number }>()
);

export const addFavoriteError = createAction(
  ACTIONS.ADD_FAVORITE_ERROR,
  props<{ error: Error }>()
);

export const deleteFavorite = createAction(
  ACTIONS.DELETE_FAVORITE,
  props<{ uid: string, flatId: number }>()
);

export const deleteFavoriteSuccess = createAction(
  ACTIONS.DELETE_FAVORITE_SUCCESS,
  props<{ flatId: number }>()
);

export const deleteFavoriteError = createAction(
  ACTIONS.DELETE_FAVORITE_ERROR,
  props<{ error: Error }>()
);

export const deleteFlat = createAction(
  ACTIONS.DELETE_FLAT,
  props<{ id: number }>()
);

export const deleteFlatSuccess = createAction(
  ACTIONS.DELETE_FLAT_SUCCESS,
  props<{ id: number }>()
);

export const deleteFlatError = createAction(
  ACTIONS.DELETE_FLAT_ERROR,
  props<{ error: Error }>()
);

export const loadUserFlats = createAction(
  ACTIONS.LOAD_USER_FLATS,
  props<{ uid: string }>()
);

export const loadUserFlatsSuccess = createAction(
  ACTIONS.LOAD_USER_FLATS_SUCCESS,
  props<{ flats: IFlat[] }>()
);

export const loadUserFlatsError = createAction(
  ACTIONS.LOAD_USER_FLATS_ERROR,
  props<{ error: Error }>()
);

export const loadFavorites = createAction(
  ACTIONS.LOAD_FAVORITES,
  props<{ ids: number[] }>()
);

export const loadFavoritesSuccess = createAction(
  ACTIONS.LOAD_FAVORITES_SUCCESS,
  props<{ flats: IFlat[] }>()
);

export const loadFavoritesError = createAction(
  ACTIONS.LOAD_FAVORITES_ERROR,
  props<{ error: Error }>()
);
