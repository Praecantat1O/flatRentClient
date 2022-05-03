import { IAddress } from './address.interface';
import { IFlatDevices } from './devices.interface';
import { IFlatInfo } from './flatInfo.interface';
import { IPhotos } from './photos.interface';

export interface IFlat {
  id: number;
  price: number;
  bedrooms: number;
  description: string;
  photo: IPhotos;
  address: IAddress;
  info: IFlatInfo;
  devices: IFlatDevices;
  userId: number;
  createdAt: Date;
}
