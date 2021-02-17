import { palette } from '../styles/theme';

export type DrinkType = {
  drinkName: string;
  outerColor: string;
  innerColor: string;
  price: number;
  isFat: boolean;
};

export type SetDrinkType = {
  [key: string]: DrinkType;
};

export const drinkData: SetDrinkType = {
  coke: {
    drinkName: 'coke',
    outerColor: palette.cokeOuter,
    innerColor: palette.cokeInner,
    price: 1000,
    isFat: false,
  },
  sprite: {
    drinkName: 'sprite',
    outerColor: palette.spriteOuter,
    innerColor: palette.spriteInner,
    price: 900,
    isFat: false,
  },
  pepper: {
    drinkName: 'Dr. pepper',
    outerColor: palette.pepperOuter,
    innerColor: palette.pepperInner,
    price: 1500,
    isFat: true,
  },
  fanta: {
    drinkName: 'fanta',
    outerColor: palette.fantaOuter,
    innerColor: palette.fantaInner,
    price: 800,
    isFat: false,
  },
  welchs: {
    drinkName: 'welchs',
    outerColor: palette.welchsOuter,
    innerColor: palette.welchsInner,
    price: 1300,
    isFat: true,
  },
  welchsStrawberry: {
    drinkName: 'welchs Strawberry',
    outerColor: palette.welchsStrawberryOuter,
    innerColor: palette.welchsStrawberryInner,
    price: 1300,
    isFat: true,
  },
  letsbe: {
    drinkName: "let'sbe",
    outerColor: palette.letsbeOuter,
    innerColor: palette.letsbeInner,
    price: 600,
    isFat: false,
  },
  tejava: {
    drinkName: 'tejava',
    outerColor: palette.tejavaOuter,
    innerColor: palette.tejavaInner,
    price: 1000,
    isFat: false,
  },
  pokari: {
    drinkName: 'pokari',
    outerColor: palette.pokariOuter,
    innerColor: palette.pokariInner,
    price: 1000,
    isFat: false,
  },
};

export const drinkStock = {
  coke: 2,
  sprite: 2,
  pepper: 1,
  fanta: 2,
  welchs: 2,
  welchsStrawberry: 2,
  letsbe: 2,
  tejava: 2,
  pokari: 2,
};
