import React, { Component } from "react";
import { connect } from "react-redux";
import { handleChange } from "../../actions/promoActions";
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
  // constructor(props) {
  //   super(props);
  //   this.state = { show: false, promoCode: "" };
  // }

  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };
  }
  handleChange(e) {
    //this.setState({ promoCode: e.target.value });
    console.log("promo code at the componnt--", e.target.value);
    this.props.handleChange(e);
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   this.props.applyDiscount(this.state.promoCode);
  // }
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
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>Promo Code</ControlLabel>{" "}
                      <FormControl
                        type="text"
                        placeholder="Enter promo code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                      />
                    </FormGroup>{" "}
                    <Button
                      block
                      //type="submit"
                      bsStyle="primary"
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCodeDiscount);
