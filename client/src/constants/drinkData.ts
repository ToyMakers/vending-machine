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
};

export const drinkStock = {
  coke: 10,
  sprite: 10,
  pepper: 1,
};
