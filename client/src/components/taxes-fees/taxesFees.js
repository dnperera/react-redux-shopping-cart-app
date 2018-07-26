import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class TaxesFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6} xs={8}>
          Est. taxes & fees (Based on 94903)
        </Col>
        <Col md={6} xs={4}>
          <strong>${this.props.taxes}</strong>
        </Col>
      </Row>
    );
  }
}
export default TaxesFees;
