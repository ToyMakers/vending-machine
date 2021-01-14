import * as actions from './actions';

export interface DrinkState {
  drinkStock: { [key: string]: number };
  inventory: { [key: string]: number };
  exitBox: string[];
}

// prepare types for all coin actions
export type DrinkAction =
  | ReturnType<typeof actions.initializeDrink>
  | ReturnType<typeof actions.buyDrink>
  | ReturnType<typeof actions.getDrink>;
