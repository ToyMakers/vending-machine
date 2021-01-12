export const INITIALIZE_COIN = 'coin/INITIALIZE_COIN' as const;
export const INSERT_COIN = 'coin/INSERT_COIN' as const;
export const POP_COIN = 'coin/POP_COIN' as const;

export const initializeCoin = () => ({
  type: INITIALIZE_COIN,
});

// wallet -> machine
export const insertCoin = (coin: number) => ({
  type: INSERT_COIN,
  payload: coin,
});

// machine -> wallet
export const popCoin = () => ({
  type: POP_COIN,
});
