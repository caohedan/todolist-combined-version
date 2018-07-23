import React, { Component } from 'react';
import AddItemContainer from './container/AddItemContainer';
import FilterList from './component/FilterList';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoList from './container/TodoListContainer';
import Row from 'antd/es/grid/row';
import Col from 'antd/es/grid/col';
import Title from './component/Title';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Title />
        <Row>
          <Col offset={7} span={10}>
            <AddItemContainer />
          </Col>
        </Row>
        <br />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={TodoList} />
            <Row>
              <Col offset={8} span={8}>
                <Route path="/:status" component={TodoList} />
              </Col>
            </Row>
            <Row>
              <FilterList />
            </Row>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
