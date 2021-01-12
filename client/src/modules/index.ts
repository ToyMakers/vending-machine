import { combineReducers } from 'redux';
import coin from './coin';

const rootReducer = combineReducers({ coin });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
