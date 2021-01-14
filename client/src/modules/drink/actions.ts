export const INITIALIZE_DRINK = 'drink/INITIALIZE_DRINK' as const;
export const BUY_DRINK = 'drink/BUY_DRINK' as const;
export const GET_DRINK = 'drink/GET_DRINK' as const;

export const initializeDrink = () => ({
  type: INITIALIZE_DRINK,
});

export const buyDrink = (drinkKey: string) => ({
  type: BUY_DRINK,
  payload: drinkKey,
});

export const getDrink = (drinkKey: string) => ({
  type: GET_DRINK,
  payload: drinkKey,
});
