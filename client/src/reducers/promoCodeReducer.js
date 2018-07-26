import { PROMO_CODE } from "../actions/types";

const initialState = {
  show: false,
  discount: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROMO_CODE:
      return { discount: action.payload };
    default:
      return state;
  }
}
