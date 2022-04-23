import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const appState = createFeatureSelector<AppState>('app');

export const getUserId = createSelector(appState, (state: AppState) => state.userId);

export const getAddressToSearch = createSelector(appState, (state: AppState) => state.addressToSearch);

export const getAddressesSuggestions = createSelector(appState, (state: AppState) => state.addressesSuggestions);
