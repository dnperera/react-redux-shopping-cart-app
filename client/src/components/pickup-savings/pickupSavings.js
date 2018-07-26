import React, { Component } from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

class PickupSavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>
          Pickup your ordered item from the near by store and get more discount{" "}
        </p>
      </Tooltip>
    );
    return (
      <Row className="show-grid">
        <Col md={6} xs={8}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div className="pickup-savings">Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col className="total-savings" md={6} xs={4}>
          ${this.props.price}
        </Col>
      </Row>
    );
  }
}
export default PickupSavings;
