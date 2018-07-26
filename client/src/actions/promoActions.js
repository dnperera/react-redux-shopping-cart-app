import { PROMO_CODE } from "./types";

export const handleChange = dicount => dispatch => {
  console.log(" in action creator actions ", dicount);
  dispatch({ type: PROMO_CODE, payload: dicount });
};
