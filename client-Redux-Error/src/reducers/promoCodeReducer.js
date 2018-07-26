import { PROMO_CODE } from "../actions/types";

const initialState = {
  open: false,
  value: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROMO_CODE:
      return {
        value: action.payload
      };
    default:
      return state;
  }
}
// import { PROMO_CODE } from "../actions/types";

// const initialState = {
//   show: false,
//   discount: ""
// };

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case PROMO_CODE:
//       return Object.assign({}, state, {
//         discount: action.payload
//       });

//     default:
//       return state;
//   }
// }
