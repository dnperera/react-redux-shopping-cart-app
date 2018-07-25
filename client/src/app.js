"use strict";
import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import "./styles.css";

import SubTotal from "./components/subTotal/subTotal";
import PickupSavings from "./components/pickup-savings/pickupSavings";
import TaxesFees from "./components/taxes-fees/taxesFees";
import EstimatedTotal from "./components/estimated-total/estimatedTotal";
import ItemDetails from "./components/item-details/itemDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 150,
      pickupSavings: -15,
      taxes: 0,
      estimatedTotal: 135
    };
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
          <ItemDetails price={this.state.total.toFixed(2)} />
        </Grid>
      </div>
    );
  }
}
export default App;
// //Dispatch delete book
// store.dispatch(deleteBook({ id: 1 }));

// //Dispatch update Book
// store.dispatch(
//   updateBook({
//     id: 2,
//     title: "Russian Roulette: The Inside Story of Putins War on America"
//   })
// );
// //Dispatch Action addtocart
// store.dispatch(addToCart([{ id: 1 }]));
// //to get the current state of the store
