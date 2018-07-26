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

class PromoCodeDiscount extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };
  }

  handleChange = e => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          {this.state.show === false ? `Apply ` : `Hide `}
          promo code {this.state.show === false ? `+` : `-`}
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
                      bsStyle="primary"
                      className="btn-round"
                      disabled={this.props.applyDiscount}
                      onClick={this.props.applyDiscount}
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
