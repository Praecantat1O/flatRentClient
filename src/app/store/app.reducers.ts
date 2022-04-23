import { createReducer, on } from '@ngrx/store';
import { initialState } from './app.state';
import * as AppActions from './app.actions';

export const appReducer = createReducer(
  initialState,
  on(AppActions.addressSearchAutocomplete, (state, { addressToSearch }) => {
    return {
      ...state,
      addressToSearch,
    };
  }),
  on(AppActions.addressSearchAutocompleteSuccess, (state, { addresses }) => {
    return {
      ...state,
      addresses,
    };
  }),
  on(AppActions.addressSearchAutocompleteError, (state, { error }) => {
    return {
      ...state,
      error,
    };
  })
);
