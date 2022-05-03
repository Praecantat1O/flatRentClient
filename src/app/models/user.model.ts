import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
  public name: string;
  public phone: string;
  public email: string;

  constructor(user: IUser) {
    this.name = user.name;
    this.phone = user.phone;
    this.email = user.email;
  }
}
