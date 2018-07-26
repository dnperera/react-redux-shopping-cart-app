import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class EstimatedTotal extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6} xs={8}>
          <p className="est-total">Est. total</p>
        </Col>
        <Col md={6} xs={4}>
          <p className="est-total">${this.props.total}</p>
        </Col>
      </Row>
    );
  }
}
export default EstimatedTotal;
