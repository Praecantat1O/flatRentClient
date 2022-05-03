import { IBathroomDevices, IHomeDevices, IKitchenDevices } from 'src/app/interfaces/devices.interface';

export const homeDevicesFields = [
  'wifi' as keyof IHomeDevices,
  'tv' as keyof IHomeDevices,
  'conditioner' as keyof IHomeDevices,
];

export const bathroomDevicesFields = [
  'shower' as keyof IBathroomDevices,
  'bath' as keyof IBathroomDevices,
  'washingMachine' as keyof IBathroomDevices,
  'dryer' as keyof IBathroomDevices,
];

export const kitchenDevicesFields = [
  'fridge' as keyof IKitchenDevices,
  'microwave' as keyof IKitchenDevices,
  'dishwasher' as keyof IKitchenDevices,
  'kettle' as keyof IKitchenDevices,
  'coffee' as keyof IKitchenDevices,
];

export const flatDevicesMap = new Map([
  ['wifi', 'WiFi'],
  ['tv', 'TV'],
  ['conditioner', 'Кондиционер'],
  ['shower', 'Душ'],
  ['bath', 'Ванна'],
  ['washingMachine', 'Стиральная машина'],
  ['dryer', 'Фен'],
  ['fridge', 'Холодильник'],
  ['microwave', 'Микроволновая печь'],
  ['dishwasher', 'Посудомоечная машина'],
  ['kettle', 'Чайник'],
  ['coffee', 'Кофеварка'],
]);

export const bedroomsOptions = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];
