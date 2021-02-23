import * as actions from './actions';

export interface CoinState {
  isCoinDragging: boolean;
  coinInMachine: number;
  coinInBox: number;
  coinInWallet: number;
}

// prepare types for all coin actions
export type CoinAction =
  | ReturnType<typeof actions.initializeCoin>
  | ReturnType<typeof actions.toggleCoinDragging>
  | ReturnType<typeof actions.pushCoin>
  | ReturnType<typeof actions.popCoin>
  | ReturnType<typeof actions.takeCoin>
  | ReturnType<typeof actions.payCoin>;
