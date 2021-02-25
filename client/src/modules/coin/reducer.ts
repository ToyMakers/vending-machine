import * as actions from './actions';
import * as types from './types';

const initialState: types.CoinState = {
  isCoinDragging: false,
  coinInWallet: 20000,
  coinInBox: 0,
  coinInMachine: 0,
};

function coin(
  state: types.CoinState = initialState,
  action: types.CoinAction
): types.CoinState {
  switch (action.type) {
    case actions.TOGGLE_COIN_DRAGGING:
      return {
        ...state,
        isCoinDragging: !state.isCoinDragging,
      };
    case actions.PUSH_COIN:
      if (action.payload > state.coinInWallet) {
        alert("You don't have enough coin");
        return state;
      }
      return {
        ...state,
        coinInWallet: state.coinInWallet - action.payload,
        coinInMachine: state.coinInMachine + action.payload,
      };

    case actions.POP_COIN:
      if (state.coinInMachine <= 0) {
        alert('There is no coin in the machine.');
        return state;
      }
      return {
        ...state,
        coinInMachine: 0,
        coinInBox: state.coinInBox + state.coinInMachine,
      };

    case actions.TAKE_COIN:
      if (state.coinInBox <= 0) {
        alert('There is no coin in the box.');
        return state;
      }
      return {
        ...state,
        coinInBox: 0,
        coinInWallet: state.coinInWallet + state.coinInBox,
      };

    case actions.PAY_COIN:
      return {
        ...state,
        coinInMachine: state.coinInMachine - action.payload,
      };

    case actions.INITIALIZE_COIN:
      return initialState;
    default:
      return state;
  }
}

export default coin;
