import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { ICountState } from './states/CountState';
import { createStore, Store } from 'redux';
import Countreducer from './reducers/Count/reducer';
import { Provider } from 'react-redux';

const store: Store<ICountState> = createStore(Countreducer);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

