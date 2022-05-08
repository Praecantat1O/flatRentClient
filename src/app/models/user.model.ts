import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
  public id: number;
  public name: string;
  public phone: string;
  public email: string;
  public uid: string;
  public favorites?: number[];

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.phone = user.phone;
    this.email = user.email;
    this.uid = user.uid;
    this.favorites = user?.favorites;
  }
}
