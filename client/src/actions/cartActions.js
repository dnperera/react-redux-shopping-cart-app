"use strict";
//Add to Cart
export const addToCart = book => {
  return {
    type: "ADD_TO_CART",
    payload: book
  };
};
