import { createReducer, on } from '@ngrx/store';
import { initialState } from './app.state';
import * as AppActions from './app.actions';
import { EntityStatus } from './state.helpers';

export const appReducer = createReducer(
  initialState,
  on(AppActions.addressSearchAutocomplete, (state, { addressToSearch }) => {
    return {
      ...state,
      addressesSuggestions: {
        ...state.addressesSuggestions,
        status: EntityStatus.Pending,
      },
      addressToSearch,
    };
  }),
  on(AppActions.addressSearchAutocompleteSuccess, (state, { addressesSuggestions }) => {
    return {
      ...state,
      addressesSuggestions: {
        ...state.addressesSuggestions,
        value: addressesSuggestions,
        status: EntityStatus.Success,
      },
    };
  }),
  on(AppActions.addressSearchAutocompleteError, (state, { error }) => {
    return {
      ...state,
      error,
    };
  }),
  on(AppActions.addressSuggestionsClear, (state) => {
    return {
      ...state,
      addressesSuggestions: {
        ...state.addressesSuggestions,
        value: null,
        status: EntityStatus.Init,
      },
    };
  })
);
