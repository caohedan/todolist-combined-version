import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../App.css'
class TodoList extends Component {
    componentDidMount() {
        this.props.onGetAll();
    }
  render() {
        console.log(this.props.todos)
    return (
      <div>
        <ol>
          {(() => {
            return this.props.todos.map(item => (
              <TodoItem
                item={item}
                key={item.viewId}
                toggleActiveHandler={viewId =>
                  this.props.onToggleTodo(viewId, this.props.statusOfList)
                }
                updateItemContent={(viewId, content) =>
                  this.props.onUpdateTodo(viewId, content)
                }
              />
            ));
          })()}
        </ol>
      </div>
    );
  }
}

export default TodoList;
