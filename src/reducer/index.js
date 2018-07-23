import * as types from '../constants/ActionTypes';
import Todo from '../model/Todo';
export default (
  state = {
    todos: [],
    statusOfList: Todo.ALL
  },
  action
) => {
  switch (action.type) {
    case types.ADDITEM: {
      console.log(action.todo)
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    }
    case types.TOGGOLE: {
      console.log(action.todo)
      return {
        ...state,
        todos: state.todos.map(
          todo => todo.viewId === action.todo.viewId ? action.todo : todo
        )
      };
    }
    case types.UPDATE: {
      return {
        ...state,
        todos: state.todos.map(
          todo =>
            todo.viewId === action.todo.viewId
              ? { ...todo, content: action.todo.content }
              : todo
        )
      };
    }
    case types.FILTER: {
      // console.log("FILTER")
      return {
        todos: [...action.todos],
        statusOfList: action.statusOfList
      };

    }
      case types.ALL: {
          return {
              todos: [...action.todos],
              statusOfList: state.statusOfList
          };
      }
    default:
      return state;
  }
};
