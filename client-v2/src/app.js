import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import { handleChange } from "./actions/promoActions";
import "./styles.css";

import SubTotal from "./components/subTotal/subTotal";
import PickupSavings from "./components/pickup-savings/pickupSavings";
import TaxesFees from "./components/taxes-fees/taxesFees";
import EstimatedTotal from "./components/estimated-total/estimatedTotal";
import ItemDetails from "./components/item-details/itemDetails";
import PromoCode from "./components/promo-code/promoCode";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 150,
      pickupSavings: -15,
      taxes: 0,
      estimatedTotal: 135,
      isPromoApplied: false
    };
  }

  componentDidMount() {
    //Assume local take rate as 9%
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSavings) * 0.09
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  }

  applyDiscount = () => {
    //Assume 'DISCOUNT' value is 10%
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function() {
          this.setState({ isPromoApplied: true });
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <Grid className="shopping-cart">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings.toFixed(2)} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal total={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.total.toFixed(2)} />
          <PromoCode
            applyDiscount={() => this.applyDiscount()}
            isPromoApplied={this.state.isPromoApplied}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.discount
});

export default connect(
  mapStateToProps,
  {
    handleChange
  }
)(App);