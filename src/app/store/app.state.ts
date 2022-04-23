import { Address } from '../models/address.model';
import { EntityStatus, StateEntity } from './state.helpers';

export interface AppState {
  userId: StateEntity<number>;
  addressesSuggestions: StateEntity<Address[]>;
  addressToSearch: string;
}

export const initialState: AppState = {
  userId: {
    status: EntityStatus.Init,
    value: null,
    error: null,
  },
  addressesSuggestions: {
    status: EntityStatus.Init,
    value: null,
    error: null,
  },
  addressToSearch: null,
};
