export interface StateEntity<T> {
  status: EntityStatus;
  value?: T;
  error?: Error;
}

export enum EntityStatus {
  Init = 'Init',
  Pending = 'Pending',
  Success = 'Success',
  Error = 'Error',
  Rejected = 'Rejected',
}
