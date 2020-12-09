import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Counter from './Counter';
import reducers from './reducers/reducers';
import {createStore} from 'redux';

// STORE
export const store = createStore(reducers); // Reducerを渡してStoreを作成

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);