export interface IAddressLocation {
  lat: number;
  lon: number;
}

export interface IAddress {
  addressStr: string;
  region: string;
  placeName: string;
  district: string;
  road: string;
  houseNumber: string;
  location: IAddressLocation;
}
