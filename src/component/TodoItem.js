import React, { Component } from 'react';
import Todo from '../model/Todo';
import '../App.css';
import { Checkbox, List } from 'antd';
import Input from 'antd/es/input/Input';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'read'
    };
  }

  changeToEditable() {
    alert('come!');
    this.setState({ status: 'write' });
  }

  updateItem(e, viewId, content) {
    if (e.keyCode === 13) {
      this.props.updateItemContent(viewId, content);
      this.setState({ status: 'read' });
    }
  }

  toggleActive(viewId) {
    this.setState({ status: 'read' });
    this.props.toggleActiveHandler(viewId);
  }

  render() {
    const item = this.props.item;
    return (
      <List.Item>
        <Checkbox
          checked={item.status === Todo.COMPLETED}
          onChange={e => this.toggleActive(item.viewId)}
        />
        <span onDoubleClick={e => this.changeToEditable(e)}>
          {this.state.status === 'read' ? (
            item.content
          ) : (
            <Input
              autoFocus
              defaultValue={item.content}
              onKeyUp={e =>
                this.updateItem(e, item.viewId, e.currentTarget.value)
              }
            />
          )}
        </span>
      </List.Item>
    );
  }
}

export default TodoItem;
