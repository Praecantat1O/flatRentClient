import { IPhotos } from '../interfaces/photos.interface';

export class Photos implements IPhotos {
  public folderName: string;
  public photoNames: string[];

  constructor(photos: IPhotos) {
    this.folderName = photos.folderName;
    this.photoNames = photos.photoNames;
  }
}
