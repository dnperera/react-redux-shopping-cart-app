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
                    src="https://i5.walmartimages.com/asr/af20cfe2-7758-494f-9978-92488b837554_1.80c1a436a7195109903dd3e430f61fba.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                    alt="thumbnail"
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    KitchenAid Artisan Series 5 Quart Tilt-Head Stand
                    Mixer,Tangerine (KSM150PSTG)
                  </p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>${this.props.price}</strong>
                      <br />
                      <strong className="price-strike">
                        ${this.props.price}
                      </strong>
                    </Col>
                    <Col md={6}>
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
