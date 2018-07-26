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
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }
  handleChange(e) {
    this.props.handleChange(e.target.value);
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
                        value={this.props.promoCode}
                        onChange={this.handleChange.bind(this)}
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
                    onClick={this.props.applyDiscount}
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
const mapStateToProps = state => ({
  promoCode: state.promoCode.discount
});

//Bind with Redux
export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCode);
