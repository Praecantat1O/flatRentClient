export interface IUser {
  id: number;
  name: string;
  phone: string;
  email: string;
  uid: string;
  favorites?: number[];
}

export interface IUserToDB {
  name: string;
  phone: string;
  email: string;
  uid: string;
}

export interface IRegForm {
  name: string;
  phone: string;
  email: string;
  password: string;
}
