import { IFlatInfo } from '../interfaces/flatInfo.interface';

export class FlatInfo implements IFlatInfo {
  public square: number;
  public combinedBathroom: boolean;
  public balcony: boolean;
  public floor: number;

  constructor(info: IFlatInfo) {
    this.square = info.square;
    this.combinedBathroom = info.combinedBathroom;
    this.balcony = info.balcony;
    this.floor = info.floor;
  }
}
