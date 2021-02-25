export const INITIALIZE_COIN = 'coin/INITIALIZE_COIN' as const;
export const TOGGLE_COIN_DRAGGING = 'coin/TOGGLE_COIN_DRAGGING' as const;
export const PUSH_COIN = 'coin/PUSH_COIN' as const;
export const POP_COIN = 'coin/POP_COIN' as const;
export const TAKE_COIN = 'coin/TAKE_COIN' as const;
export const PAY_COIN = 'coin/PAY_COIN' as const;

export const initializeCoin = () => ({
  type: INITIALIZE_COIN,
});

export const toggleCoinDragging = () => ({
  type: TOGGLE_COIN_DRAGGING,
});

// wallet -> machine
export const pushCoin = (coin: number) => ({
  type: PUSH_COIN,
  payload: coin,
});

// machine -> box
export const popCoin = () => ({
  type: POP_COIN,
});

// box -> inventory
export const takeCoin = () => ({
  type: TAKE_COIN,
});

export const payCoin = (coin: number) => ({
  type: PAY_COIN,
  payload: coin,
});
