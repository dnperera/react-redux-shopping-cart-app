import React, { Component } from "react";
import { connect } from "react-redux";
import { applyPromo } from "../../actions/promoActions";
import {
  Row,
  Col,
  Button,
  Collapse,
  Well,
  Form,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

class PromoCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promoCode: "",
      show: false
    };
  }

  //update state promoCode with new Code
  setValue(e) {
    this.setState({ promoCode: e.target.value });
  }
  applyDiscount() {
    console.log("Promocode in applyDis --", this.state.promoCode);
    this.props.applyPromo(this.state.promoCode);
  }
  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          {this.state.show === false ? `Apply ` : `Hide `}
          promo code {this.state.show === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.show}>
          <div>
            <Well>
              <Row className="show-grid">
                <Col md={6} xs={8}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>Promo Code</ControlLabel>{" "}
                      <FormControl
                        type="text"
                        placeholder="Enter promo code"
                        value={this.state.promoCode}
                        onChange={this.setValue.bind(this)}
                      />
                    </FormGroup>{" "}
                  </Form>
                </Col>
                <Col md={6} xs={4}>
                  <br />
                  <Button
                    bsStyle={
                      this.props.isPromoApplied === false ? "success" : "danger"
                    }
                    className="apply-button"
                    disabled={this.props.isPromoApplied}
                    onClick={this.applyDiscount.bind(this)}
                  >
                    Apply
                  </Button>
                </Col>
              </Row>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

//Bind with Redux
export default connect(
  null,
  { applyPromo }
)(PromoCode);
