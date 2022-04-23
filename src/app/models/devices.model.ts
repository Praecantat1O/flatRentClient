import { IHomeDevices, IBathroomDevices, IKitchenDevices, IFlatDevices } from '../interfaces/devices.interface';

export class HomeDevices implements IHomeDevices {
  public wifi: boolean;
  public tv: boolean;
  public conditioner: boolean;

  constructor(devices: IHomeDevices) {
    this.wifi = devices.wifi;
    this.tv = devices.tv;
    this.conditioner = devices.conditioner;
  }
}

export class BathroomDevices implements IBathroomDevices {
  public shower: boolean;
  public bath: boolean;
  public washingMachine: boolean;
  public dryer: boolean;

  constructor(devices: IBathroomDevices) {
    this.shower = devices.shower;
    this.bath = devices.bath;
    this.washingMachine = devices.washingMachine;
    this.dryer = devices.dryer;
  }
}

export class KitchenDevices implements IKitchenDevices {
  public fridge: boolean;
  public microwave: boolean;
  public dishwasher: boolean;
  public kettle: boolean;
  public coffee: boolean;

  constructor(devices: IKitchenDevices) {
    this.fridge = devices.fridge;
    this.microwave = devices.microwave;
    this.dishwasher = devices.dishwasher;
    this.kettle = devices.kettle;
    this.coffee = devices.coffee;
  }
}

export class FlatDevices implements IFlatDevices {
  public home: IHomeDevices;
  public bathroom: IBathroomDevices;
  public kitchen: IKitchenDevices;

  constructor(devices: IFlatDevices) {
    this.home = new HomeDevices(devices.home);
    this.bathroom = new BathroomDevices(devices.bathroom);
    this.kitchen = new KitchenDevices(devices.kitchen);
  }
}
