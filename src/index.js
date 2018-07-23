import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import initStore from './reducer';
import { Provider } from 'react-redux';
import * as actions from './action/index'
import TodoResourseAPI from "./api/TodoResourseAPI"
const store = createStore(initStore);
const rootEl = document.getElementById('root');
// TodoResourseAPI.getAll(todos => store.dispatch(actions.getAllTodos(todos)));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
