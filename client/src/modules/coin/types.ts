import * as actions from './actions';

export interface CoinState {
  coinInMachine: number;
  coinInWallet: number;
}

// prepare types for all coin actions
export type CoinAction =
  | ReturnType<typeof actions.initializeCoin>
  | ReturnType<typeof actions.pushCoin>
  | ReturnType<typeof actions.popCoin>
  | ReturnType<typeof actions.payCoin>;
