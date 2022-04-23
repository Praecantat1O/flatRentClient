export interface IHomeDevices {
  wifi: boolean;
  tv: boolean;
  conditioner: boolean;
}

export interface IBathroomDevices {
  shower: boolean;
  bath: boolean;
  washingMachine: boolean;
  dryer: boolean;
}

export interface IKitchenDevices {
  fridge: boolean;
  microwave: boolean;
  dishwasher: boolean;
  kettle: boolean;
  coffee: boolean;
}

export interface IFlatDevices {
  home: IHomeDevices;
  bathroom: IBathroomDevices;
  kitchen: IKitchenDevices;
}
