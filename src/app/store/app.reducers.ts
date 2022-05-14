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
        ...initialState.addressesSuggestions,
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
        value: [...flats].reverse(),
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
  }),
  on(AppActions.createUser, (state) => {
    return {
      ...state,
      userUid: {
        ...state.userUid,
        value: null,
        status: EntityStatus.Pending,
      },
    };
  }),
  on(AppActions.createUserSuccess, (state, { uid }) => {
    return {
      ...state,
      userUid: {
        ...state.userUid,
        value: uid,
        status: EntityStatus.Success,
      },
    };
  }),
  on(AppActions.createUserError, (state, { error }) => {
    return {
      ...state,
      userUid: {
        ...state.userUid,
        value: null,
        status: EntityStatus.Error,
        error,
      },
    };
  }),
  on(AppActions.loadCurrentUser, (state) => {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        value: null,
        status: EntityStatus.Pending,
      },
      loaderStatus: state.loaderStatus + 1,
    };
  }),
  on(AppActions.loadCurrentUserSuccess, (state, { user }) => {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        value: user,
        status: EntityStatus.Success,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.loadCurrentUserError, (state, { error }) => {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        value: null,
        status: EntityStatus.Error,
        error,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.loadUser, (state) => {
    return {
      ...state,
      selectedUser: {
        ...state.currentUser,
        value: null,
        status: EntityStatus.Pending,
      },
      loaderStatus: state.loaderStatus + 1,
    };
  }),
  on(AppActions.loadUserSuccess, (state, { user }) => {
    return {
      ...state,
      selectedUser: {
        ...state.selectedUser,
        value: user,
        status: EntityStatus.Success,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.loadUserError, (state, { error }) => {
    return {
      ...state,
      selectedUser: {
        ...state.selectedUser,
        value: null,
        status: EntityStatus.Error,
        error,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.clearUser, (state) => {
    return {
      ...state,
      currentUser: {
        ...initialState.currentUser,
      },
    };
  })
);
