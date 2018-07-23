import React, { Component } from 'react';
import Todo from '../model/Todo';
import { Input } from 'antd';


export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.newItem = React.createRef();
  }

  add = (value) => {

    this.props.onAddItem(value);
  };

  render() {
      const Search = Input.Search;
    return (
          <div>

              <Search
                  placeholder="input add text"
                  enterButton="Add"
                  size="large"
                  onSearch={value => this.add(value)}
              />
          </div>
    );
  }
}
