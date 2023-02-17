export type Phone = {
  _id: string;
  name: string;
  price: number;
  description: string;
  photoURL: string;
  purchaseURL: string;
  operatingSystem: string;
  screenSizeInch: number;
  is5GCompatible: boolean;
  hasWirelessCharging: boolean;
  storageCapacityGB: number;
  answers: Array<string>;
  __v: number;
  matchingAnswers: number;
};
