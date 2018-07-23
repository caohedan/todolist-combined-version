import { connect } from 'react-redux';
import TodoList from '../component/TodoList';
import todosAPI from '../api/TodoResourseAPI';
import {getAllTodos} from "../action";
const mapStateToProps = (state, ownProps) => {

  return {
    todos: state.todos,
    statusOfList: state.statusOfList
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggleTodo: (viewId, statusOfList) => {
      todosAPI.toggleActive(viewId,dispatch,statusOfList);
    },
    onUpdateTodo: (viewId, content) => {
       todosAPI.updateItemContent(viewId, content,dispatch);
    }
    ,onGetAll:()=> {
          const  todos = todosAPI.getAll(dispatch);
          // console.log(todos)

      }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
