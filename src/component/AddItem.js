import React, { Component } from 'react';
import Todo from '../model/Todo';
export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.newItem = React.createRef();
  }

  add = () => {
    const conetent = this.refs.newItem.value;
    this.props.onAddItem(conetent);
    this.refs.newItem.value = '';
  };

  render() {
    return (
      <div>
        <input className="input-text" id="todo-creator" ref="newItem" />
        <div className="button" onClick={e => this.add(e)}>
          Add
        </div>
      </div>
    );
  }
}
