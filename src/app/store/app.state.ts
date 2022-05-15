import { IFlatUser } from '../interfaces/flat-user.interface';
import { IFlat } from '../interfaces/flat.interface';
import { IUser } from '../interfaces/user.interface';
import { Address } from '../models/address.model';
import { EntityStatus, StateEntity } from './state.helpers';

export interface AppState {
  currentUser: StateEntity<IUser>;
  selectedUser: StateEntity<IUser>;
  addressesSuggestions: StateEntity<Address[]>;
  addressToSearch: string;
  createdFlatId: StateEntity<number>;
  flatPage: StateEntity<IFlatUser>;
  allFlats: StateEntity<IFlat[]>;
  loaderStatus: number;
  userUid: StateEntity<string>;
  userFavorites: StateEntity<IFlat[]>;
  userFlats: StateEntity<IFlat[]>;
}

export const initialState: AppState = {
  currentUser: {
    status: EntityStatus.Init,
    value: null,
    error: null,
  },
  selectedUser: {
    status: EntityStatus.Init,
    value: null,
    error: null,
  },
  addressesSuggestions: {
    status: EntityStatus.Init,
    value: null,
    error: null,
  },
  createdFlatId: {
    status: EntityStatus.Init,
    value: null,
    error: null,
  },
  flatPage: {
    status: EntityStatus.Init,
    value: null,
    error: null,
  },
  allFlats: {
    status: EntityStatus.Init,
    value: null,
    error: null,
  },
  userUid: {
    status: EntityStatus.Init,
    value: null,
    error: null,
  },
  userFavorites: {
    status: EntityStatus.Init,
    value: null,
    error: null,
  },
  userFlats: {
    status: EntityStatus.Init,
    value: null,
    error: null,
  },
  addressToSearch: null,
  loaderStatus: 0,
};
