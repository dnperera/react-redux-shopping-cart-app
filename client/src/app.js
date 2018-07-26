import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import { applyPromo } from "./actions/promoActions";
import "./styles.css";
import SubTotal from "./components/subTotal/subTotal";
import PickupSavings from "./components/pickup-savings/pickupSavings";
import TaxesFees from "./components/taxes-fees/taxesFees";
import EstimatedTotal from "./components/estimated-total/estimatedTotal";
import ItemDetails from "./components/item-details/itemDetails";
import PromoCode from "./components/promo-code/promoCode";

//load json data
import data from "./data/items.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 200,
      pickupSavings: -10,
      taxes: 0,
      estimatedTotal: 0,
      isPromoApplied: false,
      title: "",
      url: "",
      listPrince: ""
    };
  }

  componentDidMount() {
    //Load the data and randomly select item
    const noOfItems = data.length;
    const itemNo = Math.floor(Math.random() * noOfItems);
    const randomItem = data[itemNo];
    //Assume local take rate as 9%
    this.setState(
      {
        total: parseFloat(randomItem["price"]),
        pickupSavings: -1 * parseFloat(randomItem["pickupSaving"]),
        taxes:
          (parseFloat(randomItem["price"]) +
            -1 * parseFloat(randomItem["pickupSaving"])) *
          0.09,
        estimatedTotal: 0,
        isPromoApplied: false,
        title: randomItem["title"],
        url: randomItem["url"],
        listPrince: randomItem["listPrince"]
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.promoCode && nextProps.promoCode === "DISCOUNT") {
      //Assume Value of the discount as 10%
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function() {
          this.setState({ isPromoApplied: true });
        }
      );
    }
  }
  applyDiscount() {
    if (this.props.promoCode === "DISCOUNT") {
      //Assume Value of the discount as 10%
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function() {
          this.setState({ isPromoApplied: true });
        }
      );
    }
  }
  render() {
    return (
      <div className="container">
        <Grid className="shopping-cart">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings.toFixed(2)} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal total={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails
            title={this.state.title}
            url={this.state.url}
            price={this.state.total.toFixed(2)}
            listPrince={this.state.listPrince}
          />
          <PromoCode isPromoApplied={this.state.isPromoApplied} />
        </Grid>
      </div>
    );
  }
}

// export default connect(mapStateToProps)(App);
const mapStateToProps = state => ({
  promoCode: state.promoCode.discount
});

export default connect(
  mapStateToProps,
  {
    applyPromo
  }
)(App);
