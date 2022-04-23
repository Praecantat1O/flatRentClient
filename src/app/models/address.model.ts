import { IAddressLocation, IAddress } from '../interfaces/address.interface';

class AddressLocation implements IAddressLocation {
  public lat: number;
  public lon: number;

  constructor(location: IAddressLocation) {
    this.lat = location.lat;
    this.lon = location.lon;
  }
}

export class Address implements IAddress {
  public addressStr: string;
  public region: string;
  public placeName: string;
  public district: string;
  public road: string;
  public houseNumber: string;
  public location: AddressLocation;

  constructor(address: IAddress) {
    this.addressStr = address.addressStr;
    this.region = address.region;
    this.placeName = address.placeName;
    this.district = address.district;
    this.road = address.road;
    this.houseNumber = address.houseNumber;
    this.location = new AddressLocation(address.location);
  }
}
