import React, { Component } from 'react';
import Row from 'antd/es/grid/row';
import Col from 'antd/es/grid/col';
import Button from 'antd/es/button/button';
export default class FilterList extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={3}>
            <Button type="primary" href="/all">
              All
            </Button>
          </Col>
          <Col span={3}>
            <Button type="primary" href="/active">
              Active
            </Button>
          </Col>
          <Col span={2}>
            <Button type="primary" href="/completed">
              Completed
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
