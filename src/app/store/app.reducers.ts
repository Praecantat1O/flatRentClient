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
      loaderStatus: state.loaderStatus + 1,
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
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.createFlatError, (state, { error }) => {
    return {
      ...state,
      createdFlatId: {
        value: null,
        status: EntityStatus.Error,
        error,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.loadFlatPage, (state) => {
    return {
      ...state,
      flatPage: {
        ...state.flatPage,
        value: null,
        status: EntityStatus.Pending,
      },
      loaderStatus: state.loaderStatus + 1,
    };
  }),
  on(AppActions.loadFlatPageSuccess, (state, { flatPage }) => {
    return {
      ...state,
      flatPage: {
        ...state.flatPage,
        value: flatPage,
        status: EntityStatus.Success,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.loadFlatPageError, (state, { error }) => {
    return {
      ...state,
      flatPage: {
        value: null,
        status: EntityStatus.Error,
        error,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.loadAllFlats, (state) => {
    return {
      ...state,
      allFlats: {
        ...state.allFlats,
        value: null,
        status: EntityStatus.Pending,
      },
      loaderStatus: state.loaderStatus + 1,
    };
  }),
  on(AppActions.loadAllFlatsSuccess, (state, { flats }) => {
    return {
      ...state,
      allFlats: {
        ...state.allFlats,
        value: flats,
        status: EntityStatus.Success,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.loadAllFlatsError, (state, { error }) => {
    return {
      ...state,
      allFlats: {
        value: null,
        status: EntityStatus.Error,
        error,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  })
);
