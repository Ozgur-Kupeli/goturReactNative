import * as actionTypes from "../actionTypes";

export const setSelectedProduct = (id) => ({
  type: actionTypes.SELECTED_PRODUCT,
  payload: id,
});
