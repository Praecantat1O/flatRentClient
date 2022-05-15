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
  }),
  on(AppActions.addFavorite, AppActions.deleteFavorite, (state) => {
    return {
      ...state,
      userFavorites: {
        ...state.userFavorites,
        status: EntityStatus.Pending,
      },
    };
  }),
  on(AppActions.addFavoriteSuccess, (state, { flatId }) => {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        value: {
          ...state.currentUser.value,
          favorites: [...state.currentUser.value.favorites, flatId],
        },
      },
      userFavorites: {
        ...state.userFavorites,
        status: EntityStatus.Success,
      },
    };
  }),
  on(AppActions.deleteFavoriteSuccess, (state, { flatId }) => {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        value: {
          ...state.currentUser.value,
          favorites: state.currentUser.value.favorites.filter(id => id !== flatId),
        },
      },
      userFavorites: {
        ...state.userFavorites,
        value: state.userFavorites.value.filter(flat => flat.id !== flatId),
        status: EntityStatus.Success,
      },
    };
  }),
  on(AppActions.addFavoriteError, AppActions.deleteFavoriteError, (state) => {
    return {
      ...state,
      userFavorites: {
        ...state.userFavorites,
        status: EntityStatus.Error,
      },
    };
  }),
  on(AppActions.loadFavorites, (state) => {
    return {
      ...state,
      userFavorites: {
        ...state.userFavorites,
        value: null,
        status: EntityStatus.Pending,
      },
      loaderStatus: state.loaderStatus + 1,
    };
  }),
  on(AppActions.loadFavoritesSuccess, (state, { flats }) => {
    return {
      ...state,
      userFavorites: {
        ...state.userFavorites,
        value: flats,
        status: EntityStatus.Success,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.loadFavoritesError, (state, { error }) => {
    return {
      ...state,
      userFavorites: {
        ...state.userFavorites,
        value: null,
        status: EntityStatus.Error,
        error,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.loadUserFlats, (state) => {
    return {
      ...state,
      userFlats: {
        ...state.userFlats,
        value: null,
        status: EntityStatus.Pending,
      },
      loaderStatus: state.loaderStatus + 1,
    };
  }),
  on(AppActions.loadUserFlatsSuccess, (state, { flats }) => {
    return {
      ...state,
      userFlats: {
        ...state.userFlats,
        value: flats,
        status: EntityStatus.Success,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.loadUserFlatsError, (state, { error }) => {
    return {
      ...state,
      userFlats: {
        ...state.userFlats,
        value: null,
        status: EntityStatus.Error,
        error,
      },
      loaderStatus: state.loaderStatus - 1,
    };
  }),
  on(AppActions.deleteFlat, (state) => {
    return {
      ...state,
      userFlats: {
        ...state.userFlats,
        status: EntityStatus.Pending,
      },
    };
  }),
  on(AppActions.deleteFlatSuccess, (state, { id }) => {
    return {
      ...state,
      userFlats: {
        ...state.userFlats,
        value: state.userFlats.value.filter(flat => flat.id !== id),
        status: EntityStatus.Success,
      },
    };
  }),
  on(AppActions.deleteFlatError, (state) => {
    return {
      ...state,
      userFlats: {
        ...state.userFlats,
        status: EntityStatus.Error,
      },
    };
  })
);
