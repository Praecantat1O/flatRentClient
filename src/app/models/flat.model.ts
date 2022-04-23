import { IAddress } from '../interfaces/address.interface';
import { IFlatDevices } from '../interfaces/devices.interface';
import { IFlat } from '../interfaces/flat.interface';
import { IFlatInfo } from '../interfaces/flatInfo.interface';
import { IPhotos } from '../interfaces/photos.interface';
import { Address } from './address.model';
import { FlatDevices } from './devices.model';
import { FlatInfo } from './flatInfo.model';
import { Photos } from './photos.model';

export class Flat implements IFlat {
  public id: number;
  public price: number;
  public rooms: number;
  public description: string;
  public photo: IPhotos;
  public address: IAddress;
  public info: IFlatInfo;
  public devices: IFlatDevices;
  public userId: number;
  public createdAt: Date;

  constructor(flat: IFlat) {
    this.id = flat.id;
    this.price = flat.price;
    this.rooms = flat.rooms;
    this.description = flat.description;
    this.photo = new Photos(flat.photo);
    this.address = new Address(flat.address);
    this.info = new FlatInfo(flat.info);
    this.devices = new FlatDevices(flat.devices);
    this.userId = flat.userId;
    this.createdAt = flat.createdAt;
  }
}
