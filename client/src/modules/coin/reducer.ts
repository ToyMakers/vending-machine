import * as actions from './actions';
import * as types from './types';

const initialState: types.CoinState = {
  coinInWallet: 10000,
  coinInMachine: 0,
};

function coin(
  state: types.CoinState = initialState,
  action: types.CoinAction
): types.CoinState {
  switch (action.type) {
    case actions.INSERT_COIN:
      return {
        ...state,
        coinInWallet: (state.coinInWallet -= action.payload),
        coinInMachine: (state.coinInMachine += action.payload),
      };
    case actions.POP_COIN:
      return {
        ...state,
        coinInWallet: (state.coinInWallet += state.coinInMachine),
        coinInMachine: 0,
      };
    case actions.INITIALIZE_COIN:
      return initialState;
    default:
      return state;
  }
}

export default coin;
