import React, { Component } from 'react';
import Row from 'antd/es/grid/row';
import Col from 'antd/es/grid/col';

class Title extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col offset={9} span={6}>
            <h2>Jquery To Do List</h2>
          </Col>
          <Col offset={7} span={10}>
            <p>Simple Todo List with adding and filter by diff status.</p>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Title;
