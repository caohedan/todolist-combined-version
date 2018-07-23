import Todo from '../model/Todo';
import {addItem, filterTodos, toggleTodo, updateTodo, getAll, getAllTodos} from "../action";

const apiUrl = 'http://localhost:8080/api';
const axios = require('axios');
const todosAPI = {
    todos: [],
    getAll(dispatch) {
        axios
            .get(`${apiUrl}/todos`)
            .then(function (response) {
                todosAPI.todos = response.data._embedded.todos.map(x => new Todo(x.id,x.content,x.status));
                console.log(todosAPI.todos)
                dispatch(getAllTodos(todosAPI.todos));
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    add(conetent,dispatch) {
        axios
            .post(`${apiUrl}/todos`, {
                content: conetent,
                status: Todo.ACTIVE
            })
            .then(function (response) {
                console.log(response.data);
                dispatch(addItem(new Todo(
                    response.data.id,
                    response.data.content,
                    response.data.status
                )))

            })
            .catch(function (error) {
                console.log(error);
            });
    },
    filerByStatus(status,dispatch) {
        let tempUrl = `${apiUrl}/todos/search/statusOfTodos?status=completed,active`;
        if(status === Todo.ACTIVE){
            tempUrl = `${apiUrl}/todos/search/statusOfTodos?status=active`;
        }
        if(status === Todo.COMPLETED){
            tempUrl = `${apiUrl}/todos/search/statusOfTodos?status=completed`;
        }
        axios
            .get(tempUrl)
            .then(function (response) {
                todosAPI.todos = response.data._embedded.todos.map(x => new Todo(x.id,x.content,x.status));
                dispatch(filterTodos(todosAPI.todos, status));
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    toggleActive(viewId,dispatch,statusOfList) {
        // console.log(viewId)
        let todo = todosAPI.todos.find(item => item.viewId === viewId);
        console.log(todo)
        if (todo !== undefined) {
            todo.toggleActive();
        }
        console.log(todo)
        axios
            .patch(`${apiUrl}/todos/${viewId}`, {"status": todo.status})
            .then(()=>{
                dispatch(toggleTodo(todo));
                this.filerByStatus(statusOfList,dispatch);
            })
            .catch(function (error) {
                console.log(error);
            });

        return todo;
    },
    updateItemContent(viewId, content,dispatch) {
        let todo = this.todos.find(item => item.viewId === viewId);
        if (todo !== undefined) {
            todo.content = content;
        }
        axios
            .patch(`${apiUrl}/todos/${viewId}`, {"content": content})
            .then(()=>{
                dispatch(updateTodo(todo));
            })
            .catch(function (error) {
                console.log(error);
            });

        return todo;
    }
}
export default todosAPI;
