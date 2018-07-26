import { PROMO_CODE } from "./types";

export const handleChange = e => dispatch => {
  dispatch({
    type: PROMO_CODE,
    payload: e.target.value
  });
};

// import { PROMO_CODE } from "./types";

// export const handleChange = dicount => dispatch => {
//   console.log(" in action creator actions ", dicount);
//   dispatch({ type: PROMO_CODE, payload: dicount });
// };
