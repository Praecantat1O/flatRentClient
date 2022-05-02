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
      addressesSuggestions: {
        ...state.addressesSuggestions,
        value: null,
        status: EntityStatus.Error,
        error,
      },
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
  }),
  on(AppActions.addressSearchClear, (state) => {
    return {
      ...state,
      addressToSearch: null,
    };
  }),
  on(AppActions.createFlat, (state) => {
    return {
      ...state,
      createdFlatId: {
        ...state.createdFlatId,
        value: null,
        status: EntityStatus.Pending,
      },
    };
  }),
  on(AppActions.createFlatSuccess, (state, { createdFlatId }) => {
    return {
      ...state,
      createdFlatId: {
        ...state.createdFlatId,
        value: createdFlatId,
        status: EntityStatus.Success,
      },
    };
  }),
  on(AppActions.createFlatError, (state, { error }) => {
    return {
      ...state,
      createdFlatId: {
        ...state.createdFlatId,
        value: null,
        status: EntityStatus.Error,
        error,
      },
    };
  })
);
