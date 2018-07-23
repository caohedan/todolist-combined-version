import {connect} from 'react-redux';
import TodoList from '../component/TodoList';
import todosAPI from '../api/TodoResourseAPI';
import Todo from "../model/Todo";

const mapStateToProps = (state, ownProps) => {

    console.log(state);
    console.log(ownProps)
    const {match: {params: {status}}} = ownProps;
    console.log(status);
    let todos = state.todos;
    let currentTodos = isFiltered(todos, status);
    return {
        todos: currentTodos,
        statusOfList: state.statusOfList
    };
};
const isFiltered = (todos,status) => {
   let currentTodos = todos.filter(todo => {
        if (status === undefined || status === Todo.ALL) {
            return true;
        }
        return todo.status === status;
    })
    return currentTodos;
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleTodo: (viewId, statusOfList) => {
            todosAPI.toggleActive(viewId, dispatch, statusOfList);
        },
        onUpdateTodo: (viewId, content) => {
            todosAPI.updateItemContent(viewId, content, dispatch);
        }
        , onGetAll: () => {
            const todos = todosAPI.getAll(dispatch);
            // console.log(todos)

        }
    };
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
