import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { EntityStatus } from './state.helpers';

export const appState = createFeatureSelector<AppState>('app');

export const getUserId = createSelector(appState, (state: AppState) => state.userId);

export const getAddressToSearch = createSelector(appState, (state: AppState) => state.addressToSearch);

export const getAddressesSuggestions = createSelector(appState, (state: AppState) => state.addressesSuggestions);

export const getCreatedFlatId = createSelector(appState, (state: AppState) => state.createdFlatId);

// eslint-disable-next-line max-len
export const isCreatedFlatIdLoading = createSelector(appState, (state: AppState) => state.createdFlatId.status === EntityStatus.Pending);

// eslint-disable-next-line max-len
export const isSuggestionsLoading = createSelector(appState, (state: AppState) => state.addressesSuggestions.status === EntityStatus.Pending);

export const getFlatPage = createSelector(appState, (state: AppState) => state.flatPage);

export const getAllFlats = createSelector(appState, (state: AppState) => state.allFlats);

export const getLoaderStatus = createSelector(appState, (state: AppState) => state.loaderStatus !== 0);
