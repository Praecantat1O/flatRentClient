import { IFlatUser } from '../interfaces/flat-user.interface';
import { IFlat } from '../interfaces/flat.interface';
import { Address } from '../models/address.model';
import { EntityStatus, StateEntity } from './state.helpers';

export interface AppState {
  userId: StateEntity<number>;
  addressesSuggestions: StateEntity<Address[]>;
  addressToSearch: string;
  createdFlatId: StateEntity<number>;
  flatPage: StateEntity<IFlatUser>;
  allFlats: StateEntity<IFlat[]>;
  loaderStatus: number;
}

export const initialState: AppState = {
  userId: {
    status: EntityStatus.Init,
    value: 1,
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
  addressToSearch: null,
  loaderStatus: 0,
};
