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
    case actions.PUSH_COIN:
      if (action.payload > state.coinInWallet) {
        alert("You don't have enough coin");
        return state;
      }
      return {
        ...state,
        coinInWallet: (state.coinInWallet -= action.payload),
        coinInMachine: (state.coinInMachine += action.payload),
      };
    case actions.POP_COIN:
      if (state.coinInMachine <= 0) {
        alert('There is no coin in the machine.');
        return state;
      }
      return {
        ...state,
        coinInWallet: (state.coinInWallet += state.coinInMachine),
        coinInMachine: 0,
      };
    case actions.PAY_COIN:
      return {
        ...state,
        coinInMachine: (state.coinInMachine -= action.payload),
      };
    case actions.INITIALIZE_COIN:
      return initialState;
    default:
      return state;
  }
}

export default coin;
