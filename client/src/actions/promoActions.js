import { PROMO_CODE } from "./types";

export const applyPromo = dicount => dispatch => {
  dispatch({ type: PROMO_CODE, payload: dicount });
};
