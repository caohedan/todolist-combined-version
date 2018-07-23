import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import initStore from './reducer';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import 'antd/lib/date-picker/style/css'; // 加载 CSS
const store = createStore(initStore);
const rootEl = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
