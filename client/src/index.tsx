import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { delayAction } from './middlewares/delayAction';

const isTouchDevice = () => {
  if ('ontouchstart' in window) {
    alert('Sorry, this service does not support mobile.');
    return true;
  }
  return false;
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(delayAction))
);

isTouchDevice();

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <App />
    </Provider>
  </DndProvider>,

  document.getElementById('root')
);
