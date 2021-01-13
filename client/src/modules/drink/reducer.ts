import { drinkStock } from './../../constants/drinkData';
import * as actions from './actions';
import * as types from './types';

const initialState: types.DrinkState = {
  drinkStock: { ...drinkStock },
  inventory: Object.keys(drinkStock).reduce(
    // initialize the number of drink in invenntory to 0
    (acc: { [key: string]: number }, key) => {
      acc[key] = 0;
      return acc;
    },
    {}
  ),
};

function drink(
  state: types.DrinkState = initialState,
  action: types.DrinkAction
): types.DrinkState {
  switch (action.type) {
    case actions.BUY_DRINK:
      return {
        ...state,
        drinkStock: {
          ...state.drinkStock,
          [action.payload]: state.drinkStock[action.payload] - 1,
        },
      };
    case actions.GET_DRINK:
      return {
        ...state,
        inventory: {
          ...state.drinkStock,
          [action.payload]: state.drinkStock[action.payload] + 1,
        },
      };
    case actions.INITIALIZE_DRINK:
      return initialState;
    default:
      return state;
  }
}

export default drink;
