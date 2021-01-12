import * as actions from './actions';

export interface CoinState {
  coinInMachine: number;
  coinInWallet: number;
}

// prepare types for all coin actions
export type CoinAction =
  | ReturnType<typeof actions.initializeCoin>
  | ReturnType<typeof actions.insertCoin>
  | ReturnType<typeof actions.popCoin>;
