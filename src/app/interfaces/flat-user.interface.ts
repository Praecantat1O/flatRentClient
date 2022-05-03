import { IFlat } from './flat.interface';
import { IUser } from './user.interface';

export interface IFlatUser {
  flat: IFlat;
  user: IUser;
}
