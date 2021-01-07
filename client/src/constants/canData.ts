import { palette } from '../styles/theme';

export type CanType = {
  can_name: string;
  outer_color: string;
  inner_color: string;
  price: number;
};

export const coke = {
  can_name: 'coke',
  outer_color: palette.coke_outer,
  inner_color: palette.coke_inner,
  price: 100,
};
export const sprite = {
  can_name: 'sprite',
  outer_color: palette.sprite_outer,
  inner_color: palette.sprite_inner,
  price: 200,
};
export const pepper = {
  can_name: 'Dr. Pepper',
  outer_color: palette.pepper_outer,
  inner_color: palette.pepper_inner,
  price: 300,
};
