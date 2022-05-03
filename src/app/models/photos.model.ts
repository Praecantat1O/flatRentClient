import { IPhotos } from '../interfaces/photos.interface';
import { environment } from '../../environments/environment';

const url = environment.apiUrls.host;
export class Photos implements IPhotos {
  public folderName: string;
  public photoNames: string[];
  public photoUrls?: string[];

  constructor(photos: IPhotos) {
    this.folderName = photos.folderName;
    this.photoNames = photos.photoNames;
    this.photoUrls = this.photoNames.map(name => `${url}${photos.folderName}/${name}`);
  }
}
