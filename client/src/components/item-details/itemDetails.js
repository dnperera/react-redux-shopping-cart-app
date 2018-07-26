import React, { Component } from "react";
import { Row, Col, Button, Collapse, Well, Media } from "react-bootstrap";

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          {this.state.show === false ? "See" : "Hide"} item details
          {this.state.show === false ? " +" : " -"}
        </Button>
        <Collapse in={this.state.show}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    width={100}
                    height={100}
                    src={this.props.url}
                    alt="thumbnail"
                  />
                </Media.Left>
                <Media.Body>
                  <p>{this.props.title}</p>
                  <Row className="show-grid">
                    <Col md={6} xs={8}>
                      <strong>${this.props.price}</strong>
                      <br />
                      <strong className="price-strike">
                        ${this.props.listPrince}
                      </strong>
                    </Col>
                    <Col md={6} xs={4}>
                      <strong>Qty: 1</strong>
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
export default ItemDetails;
