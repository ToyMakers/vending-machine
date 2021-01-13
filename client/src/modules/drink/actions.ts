export const INITIALIZE_DRINK = 'drink/INITIALIZE_DRINK' as const;
export const BUY_DRINK = 'drink/BUY_DRINK' as const;
export const GET_DRINK = 'drink/GET_DRINK' as const;

export const initializeDrink = () => ({
  type: INITIALIZE_DRINK,
});

export const buyDrink = (drinkName: string) => ({
  type: BUY_DRINK,
  payload: drinkName,
});

export const getDrink = (drinkName: string) => ({
  type: GET_DRINK,
  payload: drinkName,
});
