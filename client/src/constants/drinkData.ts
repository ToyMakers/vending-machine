import { palette } from '../styles/theme';

export type DrinkType = {
  drinkName: string;
  outerColor: string;
  innerColor: string;
  price: number;
  isFat?: boolean;
};

export type SetDrinkType = {
  [key: string]: DrinkType;
};

export const drinkData: SetDrinkType = {
  coke: {
    drinkName: 'coke',
    outerColor: palette.coke_outer,
    innerColor: palette.coke_inner,
    price: 100,
  },
  sprite: {
    drinkName: 'sprite',
    outerColor: palette.sprite_outer,
    innerColor: palette.sprite_inner,
    price: 200,
  },
  pepper: {
    drinkName: 'Dr. pepper',
    outerColor: palette.pepper_outer,
    innerColor: palette.pepper_inner,
    price: 300,
    isFat: true,
  },
};
