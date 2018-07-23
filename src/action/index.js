import * as types from '../constants/ActionTypes';
export const addItem = todo => ({ type: types.ADDITEM, todo });
export const getAllTodos = todos => ({ type: types.ALL, todos });
export const toggleTodo = todo => ({ type: types.TOGGOLE, todo });
export const updateTodo = todo => ({ type: types.UPDATE, todo });
export const filterTodos = (todos, statusOfList) => ({
  type: types.FILTER,
  todos,
  statusOfList
});
