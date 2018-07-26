import { combineReducers } from "redux";
import promoCodeReducer from "./promoCodeReducer";

export default combineReducers({
  promoCode: promoCodeReducer
});

// import { combineReducers } from "redux";
// import promoCodeReducer from "./promoCodeReducer";

// export default combineReducers({
//   promoDiscount: promoCodeReducer
// });
