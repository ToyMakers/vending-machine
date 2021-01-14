import { combineReducers } from 'redux';
import coin from './coin';
import drink from './drink';

const rootReducer = combineReducers({ coin, drink });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
